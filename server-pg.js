const fs = require('fs')
const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server, {transports: ['websocket', 'polling']})
const { Pool } = require('pg')
const axios = require('axios')
const BigNumber = require('bignumber.js')
const exceptionHandler = require('./exceptionHandler')

let config = fs.readFileSync('config.json', 'utf8')
config = JSON.parse(config)
const api = config.api + '/json_rpc'
const wallet = `${config.auditable_wallet.api}/json_rpc`
const server_port = config.server_port
const frontEnd_api = config.frontEnd_api
let enabled_during_sync = config.websocket.enabled_during_sync
let enable_Visibility_Info = config.enableVisibilityInfo
let maxCount = 1000
let lastBlock = {
    height: -1,
    id: '0000000000000000000000000000000000000000000000000000000000000000'
}

let blockInfo = {}
let now_blocks_sync = false

// market
let now_delete_offers = false

// pool
let countTrPoolServer
let statusSyncPool = false

// aliases
let countAliasesDB
let countAliasesServer

// alt_blocks
let countAltBlocksDB = 0
let countAltBlocksServer
let statusSyncAltBlocks = false

let block_array = []
let pools_array = []

let serverTimeout = 30

io.engine.on('initial_headers', (headers, req) => {
    headers['Access-Control-Allow-Origin'] = frontEnd_api
})

io.engine.on('headers', (headers, req) => {
    headers['Access-Control-Allow-Origin'] = frontEnd_api
})

app.use(express.static('dist'))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})

const db = new Pool(config.database)

const log = (msg) => {
    let now = new Date()
    console.log(
        now.getFullYear() +
            '-' +
            now.getMonth() +
            '-' +
            now.getDate() +
            ' ' +
            now.getHours() +
            ':' +
            now.getMinutes() +
            ':' +
            now.getSeconds() +
            '.' +
            now.getMilliseconds() +
            ' ' +
            msg
    )
}

const get_info = () => {
    return axios({
        method: 'get',
        url: api,
        data: {
            method: 'getinfo',
            params: { flags: 0x410 }
        },
        transformResponse: [(data) => JSON.parse(data)]
    })
}

const get_blocks_details = (start, count) => {
    return axios({
        method: 'get',
        url: api,
        data: {
            method: 'get_blocks_details',
            params: {
                height_start: parseInt(start ? start : 0),
                count: parseInt(count ? count : 10),
                ignore_transactions: false
            }
        },
        transformResponse: [(data) => JSON.parse(data)]
    })
}

const get_alt_blocks_details = (offset, count) => {
    return axios({
        method: 'get',
        url: api,
        data: {
            method: 'get_alt_blocks_details',
            params: {
                offset: parseInt(offset),
                count: parseInt(count)
            }
        },
        transformResponse: [(data) => JSON.parse(data)]
    })
}

const get_all_pool_tx_list = () => {
    return axios({
        method: 'get',
        url: api,
        data: {
            method: 'get_all_pool_tx_list'
        },
        transformResponse: [(data) => JSON.parse(data)]
    })
}

const get_pool_txs_details = (ids) => {
    return axios({
        method: 'get',
        url: api,
        data: {
            method: 'get_pool_txs_details',
            params: { ids: ids }
        },
        transformResponse: [(data) => JSON.parse(data)]
    })
}

const get_tx_details = (tx_hash) => {
    return axios({
        method: 'get',
        url: api,
        data: {
            method: 'get_tx_details',
            params: { tx_hash: tx_hash }
        },
        transformResponse: [(data) => JSON.parse(data)]
    })
}

const get_out_info = (amount, i) => {
    return axios({
        method: 'get',
        url: api,
        data: {
            method: 'get_out_info',
            params: { amount: parseInt(amount), i: parseInt(i) }
        },
        transformResponse: [(data) => JSON.parse(data)]
    })
}

const getbalance = () => {
    return axios({
        method: 'post',
        url: wallet,
        data: {
            method: 'getbalance',
            params: {}
        },
        transformResponse: [(data) => JSON.parse(data)]
    })
}

const get_mining_history = (howManyDays = 7) => {
    let now = new Date()
    let date = now.getDate() - howManyDays
    let timestamp = Math.round(now.setDate(date) / 1000)
    return axios({
        method: 'post',
        url: wallet,
        data: {
            method: 'get_mining_history',
            params: { v: timestamp }
        },
        transformResponse: [(data) => JSON.parse(data)]
    })
}

app.get(
    '/get_info',
    exceptionHandler((req, res, next) => {
        blockInfo.lastBlock = lastBlock.height
        res.json(blockInfo)
    })
)

// Blockchain page
app.get(
    '/get_blocks_details/:start/:count',
    exceptionHandler(async (req, res, next) => {
        let start = req.params.start
        let count = req.params.count

        if (start && count) {
            const query = {
                text: "SELECT height, CASE WHEN type = 0 THEN actual_timestamp ELSE timestamp END as timestamp, base_reward, blob, block_cumulative_size, block_tself_size, cumulative_diff_adjusted, cumulative_diff_precise, difficulty, effective_fee_median, id, is_orphan, penalty, prev_id, summary_reward, this_block_fee_median, actual_timestamp , total_fee, total_txs_size, tr_count, type, miner_text_info, pow_seed FROM blocks WHERE blocks.height >= $1 ORDER BY blocks.height ASC LIMIT $2;",
                values: [start, count]
            }
            let result = await db.query(query)
            res.json(result && result.rowCount > 0 ? result.rows : [])
        }
    })
)

app.get(
    '/get_visibility_info',
    exceptionHandler(async (req, res, next) => {
        const result = await getVisibilityInfo()
        res.send(result)
    })
)

app.get(
    '/get_main_block_details/:id',
    exceptionHandler(async (req, res, next) => {
        let id = req.params.id.toLowerCase()
        if (id) {
            const query = {
                text: `SELECT b2.id as next_id, b1.* FROM blocks as b1 left join blocks as b2 on b2.height > b1.height WHERE b1.id = $1 ORDER BY b2.height ASC LIMIT 1;`,
                values: [id]
            }
            let result = await db.query(query)
            if (result && result.rowCount > 0) {
                let row = result.rows[0]
                let response = await db.query(
                    `SELECT * FROM transactions WHERE keeper_block = ${row.height};`
                )
                row.transactions_details = response.rows
                res.json(row)
            } else {
                res.send('block not found')
            }
        }
    })
)

app.get(
    '/get_tx_pool_details/:count',
    exceptionHandler(async (req, res, next) => {
        let count = req.params.count
        if (count !== undefined) {
            res.json(await getTxPoolDetails(count))
        } else {
            res.send("Error. Need 'count' params")
        }
    })
)

// Alt-blocks
app.get(
    '/get_alt_blocks_details/:offset/:count',
    exceptionHandler(async (req, res, next) => {
        let offset = parseInt(req.params.offset)
        let count = parseInt(req.params.count)

        if (count > maxCount) {
            count = maxCount
        }
        const query = {
            text: 'SELECT * FROM alt_blocks ORDER BY height DESC limit $1 offset $2;',
            values: [count, offset]
        }
        let result = await db.query(query)
        res.json(result && result.rowCount > 0 ? result.rows : [])
    })
)

app.get(
    '/get_alt_block_details/:id',
    exceptionHandler(async (req, res, next) => {
        let id = req.params.id.toLowerCase()
        if (!!id) {
            const query = {
                text: `SELECT * FROM alt_blocks WHERE hash = $1;`,
                values: [id]
            }
            let result = await db.query(query)
            res.json(result && result.rowCount > 0 ? result.rows[0] : [])
        } else
            res.status({ status: 500 }).json({
                message: `/get_out_info/:amount/:i ${req.params}`
            })
    })
)

// Transactions
app.get(
    '/get_tx_details/:tx_hash',
    exceptionHandler(async (req, res, next) => {
        let tx_hash = req.params.tx_hash.toLowerCase()
        if (tx_hash) {
            const query = {
                text: 'SELECT transactions.*, blocks.id as block_hash, blocks.timestamp as block_timestamp FROM transactions LEFT JOIN blocks ON transactions.keeper_block = blocks.height WHERE transactions.id = $1;',
                values: [tx_hash]
            }
            let result = await db.query(query)
            if (result && result.rowCount > 0) res.json(result.rows[0])
            else {
                let response = await get_tx_details(tx_hash)
                let data = response.data
                if (data.result !== undefined) {
                    res.json(data.result.tx_info)
                } else {
                    res.status({ status: 500 }).json({
                        message: `/get_tx_details/:tx_hash ${req.params}`
                    })
                }
            }
        }
    })
)

app.get(
    '/get_out_info/:amount/:i',
    exceptionHandler(async (req, res, next) => {
        let amount = req.params.amount
        let i = parseInt(req.params.i)
        if (!!amount && !!i) {
            const query = {
                text: `SELECT * FROM out_info WHERE amount = $1 AND i = $2`,
                values: [amount, i]
            }
            let result = await db.query(query)
            if (result === undefined || result.rowCount === 0) {
                let response = await get_out_info(amount, i)
                res.json({ tx_id: response.data.result.tx_id })
            } else {
                res.json(result.rows[0])
            }
        } else {
            res.status({ status: 500 }).json({
                message: `/get_out_info/:amount/:i ${req.params}`
            })
        }
    })
)

// Aliases
app.get(
    '/get_aliases/:offset/:count/:search',
    exceptionHandler(async (req, res, next) => {
        let offset = parseInt(req.params.offset)
        let count = parseInt(req.params.count)
        if (count > maxCount) {
            count = maxCount
        }
        let search = req.params.search.toLowerCase()

        if (search === 'all' && offset !== undefined && count !== undefined) {
            const query = {
                text: 'SELECT * FROM aliases WHERE enabled = 1 ORDER BY block DESC limit $1 offset $2;',
                values: [count, offset]
            }
            let result = await db.query(query)
            res.json(result && result.rowCount > 0 ? result.rows : [])
        } else if (
            search !== undefined &&
            offset !== undefined &&
            count !== undefined
        ) {
            let result = await db.query(
                `SELECT * FROM aliases WHERE enabled = 1 AND (alias LIKE '%${search}%' OR address LIKE '%${search}%' OR comment LIKE '%${search}%') ORDER BY block DESC limit ${count} offset ${offset};`
            )
            res.json(result && result.rowCount > 0 ? result.rows : [])
        }
    })
)

// Charts
app.get(
    '/get_chart/:chart/:period',
    exceptionHandler(async (req, res) => {
        let chart = req.params.chart
        let period = req.params.period
        if (chart !== undefined) {
            let period = Math.round(new Date().getTime() / 1000) - 24 * 3600 // + 86400000
            let period2 = Math.round(new Date().getTime() / 1000) - 48 * 3600 // + 86400000
            if (chart === 'all') {
                //convert me into a sp or view[sqllite3] please!!
                let arrayAll = await db.query(
                    `SELECT actual_timestamp::bigint as at, block_cumulative_size::real as bcs, tr_count::real  as trc, difficulty::real as d, type as t FROM charts WHERE actual_timestamp > ${period} ORDER BY at;`
                )
                let rows0 = await db.query(
                    `SELECT extract(epoch from date_trunc('day', to_timestamp(actual_timestamp))) as at, SUM(tr_count)::real as sum_trc FROM charts GROUP BY at ORDER BY at;`
                )
                let rows1 = await db.query(
                    `SELECT actual_timestamp as at, difficulty120::real as d120, hashrate100::real as h100, hashrate400::real as h400 FROM charts WHERE type=1 AND actual_timestamp > ${period2} ORDER BY at;`
                )
                arrayAll.rows[0] = rows0.rows
                arrayAll.rows[1] = rows1.rows
                res.json(arrayAll.rows)
            } else if (chart === 'AvgBlockSize') {
                result = await db.query(
                    `SELECT extract(epoch from date_trunc('hour', to_timestamp(actual_timestamp))) as at, avg(block_cumulative_size)::real as bcs FROM charts GROUP BY at ORDER BY at;`
                )
                res.json(result && result.rowCount > 0 ? result.rows : [])
            } else if (chart === 'AvgTransPerBlock') {
                result = await db.query(
                    `SELECT extract(epoch from date_trunc('hour', to_timestamp(actual_timestamp))) as at, avg(tr_count)::real as trc FROM charts GROUP BY at ORDER BY at;`
                )
                res.json(result && result.rowCount > 0 ? result.rows : [])
            } else if (chart === 'hashRate') {
                result = await db.query(
                    `SELECT extract(epoch from date_trunc('hour', to_timestamp(actual_timestamp))) as at, avg(difficulty120) as d120, avg(hashrate100) as h100, avg(hashrate400) as h400 FROM charts WHERE type=1 GROUP BY at ORDER BY at;`
                )
                res.json(result && result.rowCount > 0 ? result.rows : [])
            } else if (chart === 'pos-difficulty') {
                let result = await db.query(
                    `SELECT extract(epoch from date_trunc('hour', to_timestamp(actual_timestamp))) as at, case when (max(difficulty)-avg(difficulty))>(avg(difficulty)-min(difficulty)) then max(difficulty) else min(difficulty) end as d FROM charts WHERE type=0 GROUP BY at ORDER BY at;`
                )
                let result1 = await db.query(
                    'SELECT actual_timestamp as at, difficulty as d FROM charts WHERE type=0 ORDER BY at;'
                )
                res.json({
                    aggregated: result.rows,
                    detailed: result1.rows
                })
            } else if (chart === 'pow-difficulty') {
                let result = await db.query(
                    `SELECT extract(epoch from date_trunc('hour', to_timestamp(actual_timestamp))) as at, case when (max(difficulty)-avg(difficulty))>(avg(difficulty)-min(difficulty)) then max(difficulty) else min(difficulty) end as d FROM charts WHERE type=1 GROUP BY at ORDER BY at;`
                )
                let result1 = await db.query(
                    'SELECT actual_timestamp as at, difficulty as d FROM charts WHERE type=1 ORDER BY at;'
                )
                res.json({
                    aggregated: result.rows,
                    detailed: result1.rows
                })
            } else if (chart === 'ConfirmTransactPerDay') {
                let result = await db.query(
                    `SELECT extract(epoch from date_trunc('day', to_timestamp(actual_timestamp)))::integer as at, SUM(tr_count)::integer as sum_trc FROM charts GROUP BY at ORDER BY at;`
                )
                res.json(result && result.rowCount > 0 ? result.rows : [])
            }
        }
    })
)

// Search
app.get(
    '/search_by_id/:id',
    exceptionHandler(async (req, res, next) => {
        let id = req.params.id.toLowerCase()
        if (!!id) {
            let result = await db.query(
                `SELECT * FROM blocks WHERE id = '${id}' ;`
            )
            if (!result || result.rowCount === 0) {
                result = await db.query(
                    `SELECT * FROM alt_blocks WHERE hash = '${id}' ;`
                )
                if (!result || result.rowCount === 0) {
                    result = await db.query(
                        `SELECT * FROM transactions WHERE id = '${id}' ;`
                    )
                    if (!result || result.rowCount === 0) {
                        try {
                            let response = await get_tx_details(id)
                            if (response.data.result) {
                                res.json({ result: 'tx' })
                            } else {
                                let result = await db.query(
                                    `SELECT * FROM aliases WHERE enabled = 1 AND (alias LIKE '%${id}%' OR address LIKE '%${id}%' OR comment LIKE '%${id}%') ORDER BY block DESC limit 1 offset 0;`
                                )
                                if (result.rowCount > 0) {
                                    res.json({ result: 'alias' })
                                } else {
                                    res.json({ result: 'NOT FOUND' })
                                }
                            }
                        } catch (error) {
                            res.json({ result: 'NOT FOUND' })
                        }
                    } else {
                        res.json({ result: 'tx' })
                    }
                } else {
                    res.json({ result: 'alt_block' })
                }
            } else {
                res.json({ result: 'block' })
            }
        }
    })
)

const start = async () => {
    try {
        await db.query('DELETE FROM alt_blocks;')
        let result = await db.query(
            'SELECT * FROM blocks WHERE height=(SELECT MAX(height) FROM blocks);'
        )
        if (result && result.rowCount === 1) {
            lastBlock = result.rows[0]
        }
        result = await db.query(
            'SELECT COUNT(*)::integer AS alias FROM aliases;'
        )
        if (result) countAliasesDB = result.rows[0].alias

        result = await db.query(
            'SELECT COUNT(*)::integer AS height FROM alt_blocks;'
        )
        if (result) countAltBlocksDB = result.rows[0].height
        getInfoTimer()
    } catch (error) {
        log(`Start ERROR: ${error}`)
    }
}

start()

const syncPool = async () => {
    try {
        statusSyncPool = true
        countTrPoolServer = blockInfo.tx_pool_size
        if (countTrPoolServer === 0) {
            await db.query('DELETE FROM pool;')
            statusSyncPool = false
            io.emit('get_transaction_pool_info', JSON.stringify([]))
        } else {
            let response = await get_all_pool_tx_list()
            if (response.data.result.ids) {
                pools_array = response.data.result.ids
                    ? response.data.result.ids
                    : []
                try {
                    await db.query(
                        `DELETE FROM pool WHERE id NOT IN ( '${pools_array.join(
                            "','"
                        )}' )`
                    )
                } catch (error) {
                    log(`Delete From Pool ERROR: ${error}`)
                }
                try {
                    let result = await db.query('SELECT id FROM pool')
                    let new_ids = []
                    for (let j = 0; j < pools_array.length; j++) {
                        let find = false
                        for (let i = 0; i < result.rows.length; i++) {
                            if (pools_array[j] === result.rows[i].id) {
                                find = true
                                break
                            }
                        }
                        if (!find) {
                            new_ids.push(pools_array[j])
                        }
                    }

                    if (new_ids.length) {
                        try {
                            let response = await get_pool_txs_details(new_ids)
                            if (
                                response.data.result &&
                                response.data.result.txs
                            ) {
                                let txInserts = []
                                for (let tx of response.data.result.txs) {
                                    txInserts.push(
                                        `(${tx.blob_size},` +
                                            `${tx.fee},` +
                                            `'${tx.id}',` +
                                            `${tx.timestamp}` +
                                            ` )`
                                    )
                                }
                                if (txInserts.length > 0) {
                                    await db.query('BEGIN')
                                    let sql =
                                        'INSERT INTO POOL (blob_size, fee, id, timestamp) VALUES ' +
                                        txInserts.join(',')
                                    await db.query(sql)
                                    await db.query('COMMIT')
                                }
                                statusSyncPool = false
                            } else {
                                statusSyncPool = false
                            }
                            io.emit('get_transaction_pool_info', JSON.stringify(await getTxPoolDetails(0)))
                        } catch (error) {
                            statusSyncPool = false
                        }
                    } else {
                        statusSyncPool = false
                    }
                } catch (error) {
                    log(`Select id from pool ERROR: ${error}`)
                }
            } else {
                statusSyncPool = false
            }
        }
    } catch (error) {
        await db.query('DELETE FROM pool')
        statusSyncPool = false
    }
}

const parseComment = (comment) => {
    let splitComment = comment.split(/\s*,\s*/).filter((el) => !!el)
    let splitResult = splitComment[4]
    if (splitResult) {
        let result = splitResult.split(/\s*"\s*/)
        let input = result[3].toString()
        if (input) {
            let output = Buffer.from(input, 'hex')
            return output.toString()
        } else {
            return ''
        }
    } else {
        return ''
    }
}

const parseTrackingKey = (trackingKey) => {
    let splitKey = trackingKey.split(/\s*,\s*/)
    let resultKey = splitKey[5]
    if (resultKey) {
        let key = resultKey.split(':')
        let keyValue = key[1].replace(/\[|\]/g, '')
        if (keyValue) {
            return keyValue.toString().replace(/\s+/g, '')
        } else {
            return ''
        }
    } else {
        return ''
    }
}

const decodeString = (str) => {
    if (!!str) {
        str = str.replace(/'/g, "''")
        return str.replace(/\u0000/g, '', (unicode) => {
            return String.fromCharCode(
                parseInt(unicode.replace(/\\u/g, ''), 16)
            )
        })
    }
    return str
}

const syncTransactions = async () => {
    if (block_array.length > 0) {
        let blockInserts = []
        let transactionInserts = []
        let chartInserts = []
        let outInfoInserts = []
        for (const bl of block_array) {
            //build transaction inserts
            {
                try {
                    if (bl.tr_count === undefined)
                        bl.tr_count = bl.transactions_details.length
                    if (bl.tr_out === undefined) bl.tr_out = []

                    while (
                        !!(localTr = bl.transactions_details.splice(0, 1)[0])
                    ) {
                        let response = await get_tx_details(localTr.id)
                        let tx_info = response.data.result.tx_info
                        for (let item of tx_info.extra) {
                            if (item.type === 'alias_info') {
                                let arr = item.short_view.split('-->')
                                let aliasName = arr[0]
                                let aliasAddress = arr[1]
                                let aliasComment = parseComment(
                                    item.datails_view
                                )
                                let aliasTrackingKey = parseTrackingKey(
                                    item.datails_view
                                )
                                let aliasBlock = bl.height
                                let aliasTransaction = localTr.id
                                await db.query(
                                    `UPDATE aliases SET enabled=0 WHERE alias = '${aliasName}';`
                                )
                                let sql = ''
                                try {
                                    sql =
                                        `INSERT INTO aliases VALUES ('${decodeString(
                                            aliasName
                                        )}',` +
                                        `'${aliasAddress}',` +
                                        `'${decodeString(aliasComment)}',` +
                                        `'${decodeString(aliasTrackingKey)}',` +
                                        `${aliasBlock},` +
                                        `'${aliasTransaction}',` +
                                        `${1}` +
                                        `) ON CONFLICT (alias) ` +
                                        `DO UPDATE SET ` +
                                        `alias='${decodeString(aliasName)}',` +
                                        `address='${aliasAddress}',` +
                                        `comment='${decodeString(
                                            aliasComment
                                        )}',` +
                                        `tracking_key='${decodeString(
                                            aliasTrackingKey
                                        )}',` +
                                        `block='${aliasBlock}',` +
                                        `transact='${aliasTransaction}',` +
                                        `enabled=${1};`
                                    await db.query(sql)
                                } catch (error) {
                                    log(`SyncTransactions() Insert into aliases ERROR: ${error}\nsql: ${sql}`)
                                }
                            }
                        }

                        for (let item of tx_info.ins) {
                            if (item.global_indexes) {
                                bl.tr_out.push({
                                    amount: item.amount,
                                    i: item.global_indexes[0]
                                })
                            }
                        }

                        transactionInserts.push(
                            `('${tx_info.keeper_block}',` +
                                `'${tx_info.id}',` +
                                `'${tx_info.amount.toString()}',` +
                                `${tx_info.blob_size},` +
                                `'${decodeString(
                                    JSON.stringify(tx_info.extra)
                                )}',` +
                                `${tx_info.fee},` +
                                `'${decodeString(
                                    JSON.stringify(tx_info.ins)
                                )}',` +
                                `'${decodeString(
                                    JSON.stringify(tx_info.outs)
                                )}',` +
                                `'${tx_info.pub_key}',` +
                                `${tx_info.timestamp},` +
                                `'${decodeString(
                                    JSON.stringify(
                                        !!tx_info.attachments
                                            ? tx_info.attachments
                                            : {}
                                    )
                                )}')`
                        )
                    }
                } catch (error) {
                    log(`SyncTransactions() Inserting aliases ERROR: ${error}`)
                }
            }

            chartInserts.push(
                `(${bl.height},` +
                    `${bl.actual_timestamp},` +
                    `${bl.block_cumulative_size},` +
                    `${bl.cumulative_diff_precise},` +
                    `${bl.difficulty},` +
                    `${bl.tr_count ? bl.tr_count : 0},` +
                    `${bl.type},` +
                    `0,` +
                    `0,` +
                    `0)`
            )
            // }

            //build out_info inserts
            if (bl.tr_out && bl.tr_out.length > 0) {
                for (let localOut of bl.tr_out) {
                    let localOutAmount = new BigNumber(
                        localOut.amount
                    ).toNumber()

                    let response = await get_out_info(
                        localOutAmount,
                        localOut.i
                    )

                    outInfoInserts.push(
                        `(${localOut.amount},` +
                            `${localOut.i}, ` +
                            `'${response.data.result.tx_id}', ` +
                            `${bl.height})`
                    )
                }
                await db.query('begin')
                //save out_info
                {
                    try {
                        if (outInfoInserts.length > 0) {
                            let sql =
                                `INSERT INTO out_info VALUES ` +
                                outInfoInserts.join(',') +
                                `ON CONFLICT(amount, i, tx_id) DO NOTHING;`
                            await db.query(sql)
                        }
                    } catch (error) {
                        log(`SyncTransactions() Insert Into out_info ERROR: ${error}`)
                    }
                }
                await db.query('end')
            }

            //build block inserts
            {
                blockInserts.push(
                    `(${bl.height},` +
                        `${bl.actual_timestamp},` +
                        `${bl.base_reward},` +
                        `'${bl.blob}',` +
                        `${bl.block_cumulative_size},` +
                        `${bl.block_tself_size},` +
                        `${bl.cumulative_diff_adjusted},` +
                        `${bl.cumulative_diff_precise},` +
                        `${bl.difficulty},` +
                        `${bl.effective_fee_median},` +
                        `'${bl.id}',` +
                        `${bl.is_orphan},` +
                        `${bl.penalty},` +
                        `'${bl.prev_id}',` +
                        `${bl.summary_reward},` +
                        `${bl.this_block_fee_median},` +
                        `${bl.timestamp},` +
                        `${bl.total_fee},` +
                        `${bl.total_txs_size},` +
                        `${bl.tr_count ? bl.tr_count : 0},` +
                        `${bl.type},` +
                        "'" + decodeString(bl.miner_text_info) + "'," +
                        `'${bl.pow_seed}')`
                )
            }
        }

        await db.query('begin')
        //save transactions
        {
            try {
                if (transactionInserts.length > 0) {
                    let sql =
                        `INSERT INTO transactions VALUES ` +
                        transactionInserts.join(',') +
                        ' ON CONFLICT (id) DO NOTHING;'
                    await db.query(sql)
                }
            } catch (error) {
                log(`SyncTransactions() Insert Into transaction ERROR: ${error}`)
            }
        }

        //save charts
        {
            try {
                if (chartInserts.length > 0) {
                    let sql =
                        `INSERT INTO charts VALUES ` +
                        chartInserts.join(',') +
                        ';'
                    await db.query(sql)
                }
            } catch (error) {
                log(`SyncTransactions() Insert Into charts ERROR: ${error}`)
            }
        }

        //save blocks
        {
            let sql = ''
            if (blockInserts.length > 0) {
                sql =
                    'INSERT INTO blocks (height,' +
                    'actual_timestamp,' +
                    'base_reward,' +
                    'blob,' +
                    'block_cumulative_size,' +
                    'block_tself_size,' +
                    'cumulative_diff_adjusted,' +
                    'cumulative_diff_precise,' +
                    'difficulty,' +
                    'effective_fee_median,' +
                    'id,' +
                    'is_orphan,' +
                    'penalty,' +
                    'prev_id,' +
                    'summary_reward,' +
                    'this_block_fee_median,' +
                    'timestamp,' +
                    'total_fee,' +
                    'total_txs_size,' +
                    'tr_count,' +
                    'type,' +
                    'miner_text_info,' +
                    'pow_seed) VALUES ' +
                    blockInserts.join(',') +
                    ';'
                await db.query(sql)
            }
        }
        try {
            await db.query('commit')
            elementOne = block_array[0]
            lastBlock = block_array.pop()
            log(
                `BLOCKS: db = ${lastBlock.height}/ server = ${blockInfo.height}`
            )
            await db.query(
                `call update_statistics(${Math.min(
                    elementOne.height,
                    lastBlock.height
                )})`
            )
            block_array = []
        } catch (error) {
            log(`SyncTransactions() Update_Statistics Store Proc ERROR: ${error}`)
        }
    }
}

const syncBlocks = async () => {
    try {
        let count = blockInfo.height - lastBlock.height + 1
        if (count > 100) {
            count = 100
        }
        if (count < 0) {
            count = 1
        }
        let response = await get_blocks_details(lastBlock.height + 1, count)
        let localBlocks =
            response.data.result && response.data.result.blocks
                ? response.data.result.blocks
                : []
        if (localBlocks.length && lastBlock.id === localBlocks[0].prev_id) {
            block_array = localBlocks
            await syncTransactions()
            if (lastBlock.height >= blockInfo.height - 1) {
                now_blocks_sync = false
                enabled_during_sync = true
                await emitSocketInfo()
            } else {
                await pause(serverTimeout)
                await syncBlocks()
            }
        } else {
            const deleteCount = 100
            await db.query(
                `CALL purgeAboveHeight(${lastBlock.height - deleteCount})`
            )
            const result = await db.query(
                'SELECT * FROM blocks WHERE  height=(SELECT MAX(height) FROM blocks);'
            )
            if (result) {
                lastBlock = result.rows[0]
            } else {
                lastBlock = {
                    height: -1,
                    id: '0000000000000000000000000000000000000000000000000000000000000000'
                }
            }
            await pause(serverTimeout)
            await syncBlocks()
        }
    } catch (error) {
        log(`SyncBlocks() get_blocks_details ERROR: ${error}`)
        now_blocks_sync = false
    }
}

const syncAltBlocks = async () => {
    try {
        statusSyncAltBlocks = true
        await db.query('BEGIN')
        await db.query('DELETE FROM alt_blocks')
        let response = await get_alt_blocks_details(0, countAltBlocksServer)
        for (let block of response.data.result.blocks) {
            let sql =
                `INSERT INTO alt_blocks(height, timestamp, actual_timestamp, size, hash, type, difficulty, cumulative_diff_adjusted, cumulative_diff_precise,` +
                ` is_orphan, base_reward, total_fee, penalty, summary_reward, block_cumulative_size, this_block_fee_median, effective_fee_median, total_txs_size, transactions_details, miner_txt_info, pow_seed) VALUES (` +
                `${block.height},` +
                `${block.timestamp},` +
                `${block.actual_timestamp},` +
                `${block.block_cumulative_size},` +
                `'${block.id}',` +
                `${block.type},` +
                `${block.difficulty},` +
                `${block.cumulative_diff_adjusted},` +
                `${block.cumulative_diff_precise},` +
                `${block.is_orphan},` +
                `${block.base_reward},` +
                `${block.total_fee},` +
                `${block.penalty},` +
                `${block.summary_reward},` +
                `${block.block_cumulative_size},` +
                `${block.this_block_fee_median},` +
                `${block.effective_fee_median},` +
                `${block.total_txs_size},` +
                `'${JSON.stringify(block.transactions_details)}',` +
                `'${block.miner_text_info
                    .replace('\u0000', '')
                    .replace("'", "''")}',` +
                `''` +
                `);`
            await db.query(sql)
        }
        await db.query('COMMIT')
        let result = await db.query(
            'SELECT COUNT(*)::integer AS height FROM alt_blocks'
        )
        countAltBlocksDB = result && result.rowCount ? result.rows[0].height : 0
    } catch (error) {
        log(`SyncAltBlocks() ERROR: ${error}`)
        await db.query('ROLLBACK')
    }
    statusSyncAltBlocks = false
}

const getTxPoolDetails = async (count) => {
    if (count === 0) {
        let result = await db.query('SELECT blob_size, fee, id, timestamp FROM pool ORDER BY timestamp DESC;')
        return result && result.rowCount > 0 ? result.rows : []  
    }

    const query = {
        text: 'SELECT blob_size, fee, id, timestamp, false as "isNew" FROM pool ORDER BY timestamp DESC limit $1;',
        values: [count ? count : 500]
    }
    let result = await db.query(query)
    return result && result.rowCount > 0 ? result.rows : []
}

const getVisibilityInfo = async () => {
    let result = {
        amount: 0,
        percentage: 0,
        balance: 0,
        unlocked_balance: 0
    }
    try {
        if (enable_Visibility_Info) {
            const [res1, res2, res3] = await axios.all([
                getbalance(),
                get_mining_history(),
                get_info()
            ])
            result.balance = res1.data.result.balance
            result.unlocked_balance = res1.data.result.unlocked_balance

            let totalStakedCoins7Days = new BigNumber(720 * 7 * 1000000000000)
            let stakedCoinsLast7Days = new BigNumber(0)
            if ('mined_entries' in res2.data.result) {
                for (const item of res2.data.result.mined_entries) {
			stakedCoinsLast7Days = stakedCoinsLast7Days.plus(item.a)
                }
            }

            let totalCoinsInvolvedInStaking =
            stakedCoinsLast7Days.isEqualTo(0)
            ? new BigNumber(0)
            : new BigNumber(result.balance)
            .multipliedBy(
                totalStakedCoins7Days.dividedBy(stakedCoinsLast7Days)
                )
            result.amount = totalCoinsInvolvedInStaking.toNumber()
            let totalSupply = new BigNumber(res3.data.result.total_coins)
            result.percentage = totalCoinsInvolvedInStaking.dividedBy(totalSupply).multipliedBy(100).toFixed(2)
        }
    } catch (error) {
        log(`getVisibilityInfo() ERROR ${error}`)
    }
    return JSON.stringify(result)
}

const emitSocketInfo = async () => {
    if (enabled_during_sync && lastBlock) {
        blockInfo.lastBlock = lastBlock.height
        io.emit('get_info', JSON.stringify(blockInfo))
        io.emit('get_visibility_info', await getVisibilityInfo())        
    }
}

const getInfoTimer = async () => {
    if (now_delete_offers === false) {
        try {
            let response = await get_info()
            blockInfo = response.data.result
            countAliasesServer = blockInfo.alias_count
            countAltBlocksServer = blockInfo.alt_blocks_count
            countTrPoolServer = blockInfo.tx_pool_size
            if (statusSyncPool === false) {
                let result = await db.query(
                    'SELECT COUNT(*)::integer AS transactions FROM pool'
                )
                let countTrPoolDB = 0
                if (result && result.rowCount > 0)
                    countTrPoolDB = result.rows[0].transactions
                if (countTrPoolDB !== countTrPoolServer) {
                    log(
                        `need to update pool transactions, db=${countTrPoolDB} server=${countTrPoolServer}`
                    )
                    await syncPool()
                }
            }

            if (statusSyncAltBlocks === false) {
                if (countAltBlocksServer !== countAltBlocksDB) {
                    log(
                        `need to update alt-blocks, db=${countAltBlocksDB} server=${countAltBlocksServer}`
                    )
                    await syncAltBlocks()
                }
            }
            if (
                lastBlock.height !== blockInfo.height - 1 &&
                now_blocks_sync === false
            ) {
                log(
                    `need to update blocks, db=${lastBlock.height} server=${blockInfo.height}`
                )
                let result = await db.query(
                    'SELECT COUNT(*)::integer AS height FROM aliases;'
                )
                countAliasesDB = result && result.rowCount ? result.rows[0].height : 0
                if (countAliasesDB !== countAliasesServer) {
                    log(
                        `need to update aliases, db=${countAliasesDB} server=${countAliasesServer}`
                    )
                }
                now_blocks_sync = true
                await syncBlocks()
                await emitSocketInfo()
            }
            await pause(10000)
            await getInfoTimer()
        } catch (error) {
            log(`getInfoTimer() ERROR: ${error}`)
            blockInfo.daemon_network_state = 0
            await pause(300000)
            await getInfoTimer()
        }
    } else {
        await pause(10000)
        await getInfoTimer()
    }
}

const pause = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

// API
app.get(
    '/api/get_info/:flags',
    exceptionHandler(async (req, res) => {
        let flags = req.params.flags
        const response = await axios({
            method: 'get',
            url: api,
            data: {
                method: 'getinfo',
                params: { flags: parseInt(flags) }
            }
        })
        res.json(response.data)
    })
)

app.get(
    '/api/get_total_coins',
    exceptionHandler(async (req, res) => {
        const response = await axios({
            method: 'get',
            url: api,
            data: {
                method: 'getinfo',
                params: { flags: parseInt(4294967295) }
            }
        })

        let str = response.data.result.total_coins
        let result
        let totalCoins = Number(str)
        if (typeof totalCoins === 'number') {
            result = parseInt(totalCoins) / 1000000000000
        }
        let r2 = result.toFixed(2)
        res.send(r2)
    })
)

app.get(
    '/api/get_blocks_details/:start/:count',
    exceptionHandler(async (req, res) => {
        let start = req.params.start
        let count = req.params.count
        const response = await axios({
            method: 'get',
            url: api,
            data: {
                method: 'get_blocks_details',
                params: {
                    height_start: parseInt(start ? start : 0),
                    count: parseInt(count ? count : 10),
                    ignore_transactions: false
                }
            }
        })
        res.json(response.data)
    })
)

app.get(
    '/api/get_main_block_details/:id',
    exceptionHandler(async (req, res) => {
        let id = req.params.id
        const response = await axios({
            method: 'get',
            url: api,
            data: {
                method: 'get_main_block_details',
                params: {
                    id: id
                }
            }
        })
        res.json(response.data)
    })
)

app.get(
    '/api/get_alt_blocks_details/:offset/:count',
    exceptionHandler(async (req, res) => {
        let offset = req.params.offset
        let count = req.params.count
        const response = await axios({
            method: 'get',
            url: api,
            data: {
                method: 'get_alt_blocks_details',
                params: {
                    offset: parseInt(offset),
                    count: parseInt(count)
                }
            }
        })
        res.json(response.data)
    })
)

app.get(
    '/api/get_alt_block_details/:id',
    exceptionHandler(async (req, res) => {
        let id = req.params.id
        const response = await axios({
            method: 'get',
            url: api,
            data: {
                method: 'get_alt_block_details',
                params: {
                    id: id
                }
            }
        })
        req.json(response.data)
    })
)

app.get(
    '/api/get_all_pool_tx_list',
    exceptionHandler(async (req, res) => {
        const response = await axios({
            method: 'get',
            url: api,
            data: {
                method: 'get_all_pool_tx_list'
            }
        })
        res.json(response.data)
    })
)

app.get(
    '/api/get_pool_txs_details',
    exceptionHandler(async (req, res) => {
        const response = await axios({
            method: 'get',
            url: api,
            data: {
                method: 'get_pool_txs_details'
            }
        })
        res.json(response.data)
    })
)

app.get(
    '/api/get_pool_txs_brief_details',
    exceptionHandler(async (req, res) => {
        const response = await axios({
            method: 'get',
            url: api,
            data: {
                method: 'get_pool_txs_brief_details'
            }
        })
        res.json(response.data)
    })
)

app.get(
    '/api/get_tx_details/:tx_hash',
    exceptionHandler(async (req, res) => {
        let tx_hash = req.params.tx_hash
        const response = await axios({
            method: 'get',
            url: api,
            data: {
                method: 'get_tx_details',
                params: { tx_hash: tx_hash }
            }
        })
        res.json(response.data)
    })
)

app.use(function (req, res) {
    res.sendFile(__dirname + '/dist/index.html')
})

io.on('connection', async (socket) => {
    await emitSocketInfo()
})

server.listen(server_port, () => {
    log(`Server listening on port ${server.address().port}`)
})
