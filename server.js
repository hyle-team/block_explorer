const fs = require('fs')
const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server, {transports: ['websocket', 'polling']})
const db = require('better-sqlite3')('db', { verbose: null, timeout: 30000 })
const axios = require('axios')
const BigNumber = require('bignumber.js')
const exceptionHandler = require('./exceptionHandler')
const { rows } = require('pg/lib/defaults')

let config = fs.readFileSync('config.json', 'utf8')
config = JSON.parse(config)
const api = config.api + '/json_rpc'
const server_port = config.server_port
const frontEnd_api = config.frontEnd_api
let enabled_during_sync = config.websocket.enabled_during_sync
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

function log(msg) {
    let t = new Date()
    console.log(
        t.getFullYear() +
            '-' +
            t.getMonth() +
            '-' +
            t.getDate() +
            ' ' +
            t.getHours() +
            ':' +
            t.getMinutes() +
            ':' +
            t.getSeconds() +
            '.' +
            t.getMilliseconds() +
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

app.get('/get_info', (req, res) => {
    blockInfo.lastBlock = lastBlock.height
    res.json(blockInfo)
})

// Blockchain page
app.get(
    '/get_blocks_details/:start/:count',
    exceptionHandler(async (req, res) => {
        let start = req.params.start
        let count = req.params.count

        if (start && count) {
            let rows = db
                .prepare(
                    'SELECT blocks.* FROM blocks WHERE blocks.height >= ? ORDER BY blocks.height ASC LIMIT ?;'
                )
                .all(start, count)
            res.json(rows && rows.length > 0 ? rows : [])
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
    exceptionHandler(async (req, res) => {
        let id = req.params.id.toLowerCase()
        if (id) {
            let row = db
                .prepare(
                    'SELECT b2.id as next_id, b1.* FROM blocks as b1 left join blocks as b2 on b2.height > b1.height WHERE b1.id == ? ORDER BY b2.height ASC LIMIT 1;'
                )
                .get(id)
            if (row) {
                let rows = db
                    .prepare(
                        'SELECT * FROM transactions WHERE keeper_block = ?'
                    )
                    .all(row.height)
                row.transactions_details = rows
                res.json(row)
            } else {
                res.send('block not found')
            }
        }
    })
)

app.get(
    '/get_tx_pool_details/:count',
    exceptionHandler(async (req, res) => {
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
    exceptionHandler(async (req, res) => {
        let offset = req.params.offset
        let count = req.params.count

        if (count > maxCount) {
            count = maxCount
        }
        let rows = db
            .prepare(
                'SELECT * FROM alt_blocks ORDER BY height DESC limit ? offset ?'
            )
            .all(count, offset)
        res.json(rows && rows.length > 0 ? rows : [])
    })
)

app.get(
    '/get_alt_block_details/:id',
    exceptionHandler(async (req, res) => {
        let id = req.params.id.toLowerCase()
        if (id) {
            try {
                let row = db
                    .prepare('SELECT * FROM alt_blocks WHERE hash == ? ;')
                    .get(id)
                res.json(row ? row : {})
            } catch (error) {
                return res.status({ status: 500 }).json({
                    message: `/get_out_info/:amount/:i ${req.params}`
                })
            }
        }
    })
)

// Transactions
app.get(
    '/get_tx_details/:tx_hash',
    exceptionHandler(async (req, res) => {
        let tx_hash = req.params.tx_hash.toLowerCase()
        if (tx_hash) {
            let row = db
                .prepare(
                    'SELECT transactions.*, blocks.id as block_hash, blocks.timestamp as block_timestamp FROM transactions LEFT JOIN blocks ON transactions.keeper_block = blocks.height WHERE transactions.id == ? ;'
                )
                .all(tx_hash)
            if (row && row.length > 0) {
                res.json(row[0])
            } else {
                let response = await get_tx_details(tx_hash)
                let data = response.data
                if (data.result !== undefined) {
                    res.json(data.result.tx_info)
                } else {
                    res.send("Error. Need 'tx_hash' param")
                }
            }
        }
    })
)

app.get('/get_out_info/:amount/:i', async (req, res) => {
    let amount = req.params.amount
    let i = req.params.i

    if (!!amount && !!i) {
        let row = db
            .prepare(`SELECT * FROM out_info WHERE amount = ? AND i = ?`)
            .get(amount, i)
        if (!row) {
            let response = await get_out_info(amount, i)
            res.json({ tx_id: response.data.result.tx_id })
        } else {
            res.json(row)
        }
    }
})

// Aliases
app.get('/get_aliases/:offset/:count/:search', (req, res) => {
    let offset = req.params.offset
    let count = req.params.count
    let search = req.params.search.toLowerCase()
    if (count > maxCount) {
        count = maxCount
    }
    if (search === 'all' && offset !== undefined && count !== undefined) {
        let rows = db
            .prepare(
                'SELECT * FROM aliases WHERE enabled == 1 ORDER BY block DESC limit ? offset ?'
            )
            .all(count, offset)
        res.json(rows && rows.length > 0 ? rows : [])
    } else if (
        search !== undefined &&
        offset !== undefined &&
        count !== undefined
    ) {
        let rows = db
            .prepare(
                "SELECT * FROM aliases WHERE enabled == 1 AND (alias LIKE '%?%' OR address LIKE '%?%' OR comment LIKE '%?%') ORDER BY block DESC limit ? offset ?"
            )
            .all(serach, count, offset)
        res.json(rows && rows.length > 0 ? rows : [])
    }
})

// Charts
app.get('/get_chart/:chart/:period', (req, res) => {
    let chart = req.params.chart
    let period = req.params.period
    if (chart !== undefined) {
        let period = Math.round(new Date().getTime() / 1000) - 24 * 3600 // + 86400000
        let period2 = Math.round(new Date().getTime() / 1000) - 48 * 3600 // + 86400000
        if (chart === 'all') {
            let arrayAll = null
            let rows0 = null
            let rows1 = null
            try {
                arrayAll = db
                    .prepare(
                        'SELECT actual_timestamp as at, block_cumulative_size as bcs, tr_count as trc, difficulty as d, type as t FROM charts WHERE actual_timestamp > ? ORDER BY actual_timestamp;'
                    )
                    .all(period)
            } catch (error) {
                log('all charts error', error)
            }

            try {
                rows0 = db
                    .prepare(
                        "SELECT actual_timestamp as at, SUM(tr_count) as sum_trc FROM charts GROUP BY strftime('%Y-%m-%d', datetime(actual_timestamp, 'unixepoch')) ORDER BY actual_timestamp;"
                    )
                    .all()
            } catch (error) {
                log('all charts confirmed-transactions-per-day', error)
            }

            try {
                rows1 = db
                    .prepare(
                        'SELECT actual_timestamp as at, difficulty120 as d120, hashrate100 as h100, hashrate400 as h400 FROM charts WHERE type=1 AND actual_timestamp > ? ORDER BY actual_timestamp;'
                    )
                    .all(period2)
            } catch (error) {
                log('all hashrate', error)
                return
            }
            arrayAll[0] = rows0
            arrayAll[1] = rows1
            res.json(arrayAll)
        } else if (chart === 'AvgBlockSize') {
            try {
                let rows = db
                    .prepare(
                        "SELECT actual_timestamp as at, avg(block_cumulative_size) as bcs FROM charts GROUP BY strftime('%Y-%m-%d, %H', datetime(actual_timestamp, 'unixepoch')) ORDER BY actual_timestamp"
                    )
                    .all()
                res.json(rows && rows.length > 0 ? rows : [])
            } catch (error) {
                log('AvgBlockSize', error)
            }
        } else if (chart === 'AvgTransPerBlock') {
            try {
                let rows = db
                    .prepare(
                        "SELECT actual_timestamp as at, avg(tr_count) as trc FROM charts GROUP BY strftime('%Y-%m-%d, %H', datetime(actual_timestamp, 'unixepoch')) ORDER BY actual_timestamp"
                    )
                    .all()
                res.json(rows && rows.length > 0 ? rows : [])
            } catch (error) {
                log('AvgTransPerBlock', error)
            }
        } else if (chart === 'hashRate') {
            try {
                let rows = db
                    .prepare(
                        "SELECT actual_timestamp as at, avg(difficulty120) as d120, avg(hashrate100) as h100, avg(hashrate400) as h400 FROM charts WHERE type=1 GROUP BY strftime('%Y-%m-%d, %H', datetime(actual_timestamp, 'unixepoch')) ORDER BY actual_timestamp"
                    )
                    .all()
                res.json(rows && rows.length > 0 ? rows : [])
            } catch (error) {
                log('hashrate', error)
            }
        } else if (chart === 'pos-difficulty') {
            let rows = null
            try {
                rows = db
                    .prepare(
                        "SELECT actual_timestamp as at, case when (max(difficulty)-avg(difficulty))>(avg(difficulty)-min(difficulty)) then max(difficulty) else min(difficulty) end as d FROM charts WHERE type=0 GROUP BY strftime('%Y-%m-%d, %H', datetime(actual_timestamp, 'unixepoch')) ORDER BY actual_timestamp"
                    )
                    .all()
            } catch (error) {
                log('pos-difficulty', err)
                return
            }
            try {
                rows2 = db
                    .prepare(
                        'SELECT actual_timestamp as at, difficulty as d FROM charts WHERE type=0 ORDER BY actual_timestamp'
                    )
                    .all()
            } catch (error) {
                log('pos-difficulty', error)
                return
            }
            res.json({
                aggregated: rows.length > 0 ? rows : [],
                detailed: rows2.length > 0 ? rows2 : []
            })
        } else if (chart === 'pow-difficulty') {
            let rows = null
            try {
                rows = db
                    .prepare(
                        "SELECT actual_timestamp as at, case when (max(difficulty)-avg(difficulty))>(avg(difficulty)-min(difficulty)) then max(difficulty) else min(difficulty) end as d FROM charts WHERE type=1 GROUP BY strftime('%Y-%m-%d, %H', datetime(actual_timestamp, 'unixepoch')) ORDER BY actual_timestamp"
                    )
                    .all()
            } catch (error) {
                log('pow-difficulty', err)
                return
            }
            try {
                rows2 = db
                    .prepare(
                        'SELECT actual_timestamp as at, difficulty as d FROM charts WHERE type=1 ORDER BY actual_timestamp'
                    )
                    .all()
            } catch (error) {
                log('pow-difficulty', error)
                return
            }
            res.json({
                aggregated: rows.length > 0 ? rows : [],
                detailed: rows2.length > 0 ? rows2 : []
            })
        } else if (chart === 'ConfirmTransactPerDay') {
            let rows = db
                .prepare(
                    "SELECT actual_timestamp as at, SUM(tr_count) as sum_trc FROM charts GROUP BY strftime('%Y-%m-%d', datetime(actual_timestamp, 'unixepoch')) ORDER BY actual_timestamp"
                )
                .all()
            res.json(rows && rows.length > 0 ? rows : [])
        }
    }
})

// Search
app.get('/search_by_id/:id', async (req, res) => {
    let id = req.params.id.toLowerCase()
    if (id) {
        let row = db.prepare('SELECT * FROM blocks WHERE id == ? ;').all(id)
        if (!row || row.length === 0) {
            let row = db
                .prepare('SELECT * FROM alt_blocks WHERE hash == ?')
                .all(id)
            if (!row || row.length === 0) {
                let row = db
                    .prepare('SELECT * FROM transactions WHERE id == ?')
                    .all(id)
                if (!row || row.length === 0) {
                    try {
                        let response = await get_tx_details(id)
                        if (response.data.result) {
                            res.send(JSON.stringify({ result: 'tx' }))
                        } else {
                            rows = db
                                .prepare(
                                    "SELECT * FROM aliases WHERE enabled == 1 AND (alias LIKE '%?%' OR address LIKE '%?%' OR comment LIKE '%?%') ORDER BY block DESC limit ? offset ?"
                                )
                                .all(id, 1, 0)
                            if (rows && rows.length > 0) {
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

db.prepare(
    'create table if not exists blocks (height INTEGER UNIQUE' +
        ', actual_timestamp INTEGER' +
        ', base_reward TEXT' +
        ', blob TEXT' +
        ', block_cumulative_size INTEGER' +
        ', block_tself_size TEXT' +
        ', cumulative_diff_adjusted TEXT' +
        ', cumulative_diff_precise TEXT' +
        ', difficulty TEXT' +
        ', effective_fee_median TEXT' +
        ', id TEXT' +
        ', is_orphan INTEGER' +
        ', penalty TEXT' +
        ', prev_id TEXT' +
        ', summary_reward TEXT' +
        ', this_block_fee_median TEXT' +
        ', timestamp INTEGER' +
        ', total_fee TEXT' +
        ', total_txs_size INTEGER' +
        ', tr_count INTEGER' +
        ', type INTEGER' +
        ', miner_text_info TEXT' +
        ', pow_seed TEXT' +
        ');'
).run()

db.prepare(
    'CREATE INDEX if not exists index_bl_height ON blocks(height);'
).run()
db.prepare('CREATE INDEX if not exists index_bl_id ON blocks(id);').run()

db.prepare(
    'create table if not exists transactions (keeper_block INTEGER, ' +
        'id TEXT, ' +
        'amount TEXT,' +
        'blob_size INTEGER,' +
        'extra TEXT,' +
        'fee TEXT,' +
        'ins TEXT,' +
        'outs TEXT,' +
        'pub_key TEXT,' +
        'timestamp INTEGER,' +
        'attachments TEXT' +
        ');'
).run()

db.prepare(
    'CREATE INDEX if not exists index_tr_keeper_block ON transactions(keeper_block);'
).run()
db.prepare('CREATE INDEX if not exists index_tr_id ON transactions(id);').run()
db.prepare(
    'create table if not exists aliases (' +
        'alias TEXT,' +
        'address TEXT,' +
        'comment TEXT,' +
        'tracking_key TEXT,' +
        'block INTEGER,' +
        'transact TEXT,' +
        'enabled INTEGER' +
        ');'
).run()
db.prepare('CREATE INDEX if not exists index_al_block ON aliases(block);').run()
db.prepare(
    'create table if not exists alt_blocks (' +
        'height INTEGER,' +
        'timestamp INTEGER,' +
        'actual_timestamp INTEGER,' +
        'size INTEGER,' +
        'hash TEXT,' +
        'type INTEGER,' +
        'difficulty TEXT,' +
        'cumulative_diff_adjusted TEXT,' +
        'cumulative_diff_precise TEXT,' +
        'is_orphan INTEGER,' +
        'base_reward TEXT,' +
        'total_fee TEXT,' +
        'penalty TEXT,' +
        'summary_reward TEXT,' +
        'block_cumulative_size INTEGER,' +
        'this_block_fee_median TEXT,' +
        'effective_fee_median TEXT,' +
        'total_txs_size INTEGER,' +
        'transactions_details TEXT,' +
        'miner_txt_info TEXT,' +
        'pow_seed TEXT' +
        ');'
).run()
db.prepare(
    'CREATE INDEX if not exists index_ab_hash ON alt_blocks(hash);'
).run()

db.prepare(
    'create table if not exists pool (' +
        'blob_size TEXT,' +
        'fee TEXT,' +
        'id TEXT,' +
        'timestamp TEXT' +
        ');'
).run()
db.prepare('CREATE INDEX if not exists index_pool_id ON pool(id);').run()

db.prepare(
    'create table if not exists charts (' +
        'height INTEGER' +
        ', actual_timestamp INTEGER' +
        ', block_cumulative_size INTEGER' +
        ', cumulative_diff_precise TEXT' +
        ', difficulty TEXT' +
        ', tr_count INTEGER' +
        ', type INTEGER' +
        ', difficulty120 TEXT' +
        ', hashrate100 TEXT' +
        ', hashrate400 TEXT' +
        ');'
).run()
db.prepare(
    'CREATE INDEX if not exists index_bl_height ON charts(height);'
).run()
db.prepare('DELETE FROM alt_blocks').run()

db.prepare(
    'create table if not exists out_info (' +
        'amount TEXT,' +
        'i INTEGER,' +
        'tx_id TEXT,' +
        'block INTEGER' +
        ');'
).run()

db.prepare(
    'CREATE UNIQUE INDEX if not exists index_out_info ON out_info(amount, i, tx_id);'
).run()

const start = async () => {
    try {
        db.prepare('DELETE FROM alt_blocks;').run()
        let row = db
            .prepare(
                'SELECT * FROM blocks WHERE height=(SELECT MAX(height) FROM blocks)'
            )
            .get()
        if (row) lastBlock = row
        countAliasesDB =
            db.prepare('SELECT COUNT(*) AS alias FROM aliases').get().alias || 0
        countAltBlocksDB =
            db.prepare('SELECT COUNT(*) AS height FROM alt_blocks').height || 0

        getInfoTimer()
    } catch (error) {
        log('Start Error', error)
    }
}

start()

const syncPool = async () => {
    try {
        statusSyncPool = true
        countTrPoolServer = blockInfo.tx_pool_size
        if (countTrPoolServer === 0) {
            db.prepare('DELETE FROM alt_blocks;').run()
            statusSyncPool = false
            io.emit('get_transaction_pool_info', JSON.stringify([]))
        } else {
            let response = await get_all_pool_tx_list()
            if (response.data.result.ids) {
                pools_array = response.data.result.ids
                    ? response.data.result.ids
                    : []
                try {
                    db.prepare('DELETE FROM pool WHERE id NOT IN (?)').run(
                        pools_array.join("','")
                    )
                } catch (error) {
                    log('pool delete', error)
                }
                try {
                    let rows = db.prepare('SELECT id FROM pool').all()
                    var new_ids = []
                    for (var j = 0; j < pools_array.length; j++) {
                        var find = false
                        for (var i = 0; i < rows.length; i++) {
                            if (pools_array[j] === rows[i].id) {
                                find = true
                                break
                            } else {
                                log('pools_array[j] !== rows[i].id')
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
                                const insert = db.prepare(
                                    'INSERT INTO pool VALUES (@blob_size, @fee, @id, @timestamp)'
                                )
                                const insertMany = db.transaction(
                                    (transactions) => {
                                        for (const transaction of transactions)
                                            insert.run(transaction)
                                    }
                                )

                                let values = []
                                for (const tx of response.data.result.txs) {
                                    values.push({
                                        blob_size: tx.blob_size,
                                        fee: tx.fee,
                                        id: tx.id,
                                        timestamp: tx.timestamp
                                    })
                                }
                                insertMany(values)
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
                    log('select id from pool', error)
                }
            } else {
                statusSyncPool = false
            }
        }
    } catch (error) {
        db.prepare('DELETE FROM alt_blocks;').run()
        statusSyncPool = false
    }
}

function parseComment(comment) {
    var splitComment = comment.split(/\s*,\s*/).filter((el) => !!el)
    var splitResult = splitComment[4]
    if (splitResult) {
        var result = splitResult.split(/\s*"\s*/)
        var input = result[3].toString()
        if (input) {
            var output = Buffer.from(input, 'hex')
            return output.toString()
        } else {
            return ''
        }
    } else {
        return ''
    }
}

function parseTrackingKey(trackingKey) {
    var splitKey = trackingKey.split(/\s*,\s*/)
    var resultKey = splitKey[5]
    if (resultKey) {
        var key = resultKey.split(':')
        var keyValue = key[1].replace(/\[|\]/g, '')
        if (keyValue) {
            keyValue.toString()
            keyValue = keyValue.replace(/\s+/g, '')
            return keyValue
        } else {
            return ''
        }
    } else {
        return ''
    }
}

async function syncTransactions() {
    if (block_array.length > 0) {
        var localBl = block_array[0]

        if (localBl.transactions_details.length === 0) {
            if (localBl.tr_out.length === 0) {
                db.prepare('begin')
                var hashrate100 = 0
                var hashrate400 = 0

                if (localBl.type === 1) {
                    try {
                        let rows = db
                            .prepare(
                                `SELECT height, actual_timestamp, cumulative_diff_precise FROM charts WHERE type=1`
                            )
                            .all()
                        for (let i = 0; i < rows.length; i++) {
                            hashrate100 =
                                i > 99 - 1
                                    ? (localBl['cumulative_diff_precise'] -
                                          rows[rows.length - 100][
                                              'cumulative_diff_precise'
                                          ]) /
                                      (localBl['actual_timestamp'] -
                                          rows[rows.length - 100][
                                              'actual_timestamp'
                                          ])
                                    : 0
                            hashrate400 =
                                i > 399 - 1
                                    ? (localBl['cumulative_diff_precise'] -
                                          rows[rows.length - 400][
                                              'cumulative_diff_precise'
                                          ]) /
                                      (localBl['actual_timestamp'] -
                                          rows[rows.length - 400][
                                              'actual_timestamp'
                                          ])
                                    : 0
                        }

                        db.prepare(
                            'INSERT INTO charts VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
                        ).run(
                            localBl.height,
                            localBl.actual_timestamp,
                            localBl.block_cumulative_size,
                            localBl.cumulative_diff_precise.toString(),
                            localBl.difficulty.toString(),
                            localBl.tr_count ? localBl.tr_count : 0,
                            localBl.type,
                            (localBl.difficulty / 120).toFixed(0),
                            hashrate100,
                            hashrate400
                        )
                    } catch (error) {
                        log('syncTransactions', error)
                    }
                } else {
                    db.prepare(
                        'INSERT INTO charts VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
                    ).run(
                        localBl.height,
                        localBl.actual_timestamp,
                        localBl.block_cumulative_size,
                        localBl.cumulative_diff_precise.toString(),
                        localBl.difficulty.toString(),
                        localBl.tr_count ? localBl.tr_count : 0,
                        localBl.type,
                        0,
                        0,
                        0
                    )
                }
                db.prepare(
                    'INSERT INTO blocks VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
                ).run(
                    localBl.height,
                    localBl.actual_timestamp,
                    localBl.base_reward,
                    localBl.blob,
                    localBl.block_cumulative_size,
                    localBl.block_tself_size,
                    localBl.cumulative_diff_adjusted.toString(),
                    localBl.cumulative_diff_precise.toString(),
                    localBl.difficulty.toString(),
                    localBl.effective_fee_median,
                    localBl.id,
                    localBl.is_orphan ? 1 : 0,
                    localBl.penalty,
                    localBl.prev_id,
                    localBl.summary_reward,
                    localBl.this_block_fee_median,
                    localBl.timestamp,
                    localBl.total_fee.toString(),
                    localBl.total_txs_size,
                    localBl.tr_count ? localBl.tr_count : 0,
                    localBl.type,
                    localBl.miner_text_info,
                    localBl.pow_seed
                )

                db.prepare('commit')
                lastBlock = block_array.splice(0, 1)[0]
                log(
                    'BLOCKS: db =' +
                        lastBlock.height +
                        '/server =' +
                        blockInfo.height +
                        ' transaction left = ' +
                        localBl.tr_count
                )
                await delay(serverTimeout)
                await syncTransactions()
            } else {
                var localOut = localBl.tr_out[0]
                let localOutAmount = new BigNumber(localOut.amount).toNumber()

                try {
                    let response = await get_out_info(
                        localOutAmount,
                        localOut.i
                    )
                    // let data2 = response.data
                    db.prepare('begin')
                    db.prepare(`REPLACE INTO out_info VALUES (?, ?, ?, ?)`).run(
                        localOut.amount.toString(),
                        localOut.i,
                        response.data.result.tx_id,
                        localBl.height
                    )
                    localBl.tr_out.splice(0, 1)
                    db.prepare('commit')
                    log('tr_out left = ' + localBl.tr_out.length)
                    await delay(serverTimeout)
                    await syncTransactions()
                } catch (error) {
                    log('syncTransactions() get_out_info ERROR', error)
                    now_blocks_sync = false
                }
            }
        } else {
            if (localBl.tr_count === undefined)
                localBl.tr_count = localBl.transactions_details.length
            if (localBl.tr_out === undefined) localBl.tr_out = []
            var localTr = localBl.transactions_details.splice(0, 1)[0]
            try {
                let response = await get_tx_details(localTr.id)
                let tx_info = response.data.result.tx_info
                for (var item of tx_info.extra) {
                    if (item.type === 'alias_info') {
                        var arr = item.short_view.split('-->')
                        var aliasName = arr[0]
                        var aliasAddress = arr[1]
                        var aliasComment = parseComment(item.datails_view)
                        var aliasTrackingKey = parseTrackingKey(
                            item.datails_view
                        )
                        var aliasBlock = localBl.height
                        var aliasTransaction = localTr.id
                        db.prepare(
                            'UPDATE aliases SET enabled=0 WHERE alias == ?'
                        ).run(aliasName)
                        db.prepare(
                            'REPLACE INTO aliases VALUES (?, ?, ?, ?, ?, ?, ?)'
                        ).run(
                            aliasName,
                            aliasAddress,
                            aliasComment,
                            aliasTrackingKey,
                            aliasBlock,
                            aliasTransaction,
                            1
                        )
                    }
                }

                for (var item of tx_info.ins) {
                    if (item.global_indexes) {
                        localBl.tr_out.push({
                            amount: item.amount,
                            i: item.global_indexes[0]
                        })
                    }
                }

                db.prepare('begin')
                db.prepare(
                    'REPLACE INTO transactions VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
                ).run(
                    tx_info.keeper_block,
                    tx_info.id,
                    tx_info.amount.toString(),
                    tx_info.blob_size,
                    JSON.stringify(tx_info.extra),
                    tx_info.fee.toString(),
                    JSON.stringify(tx_info.ins),
                    JSON.stringify(tx_info.outs),
                    tx_info.pub_key,
                    tx_info.timestamp,
                    JSON.stringify(
                        !!tx_info.attachments ? tx_info.attachments : {}
                    )
                )
                db.prepare('commit')
                await delay(serverTimeout)
                log(
                    'BLOCKS: db =' +
                        localBl.height +
                        '/ server =' +
                        blockInfo.height +
                        ' transaction left = ' +
                        localBl.transactions_details.length
                )
                await syncTransactions()
            } catch (error) {
                log('syncTransactions() get_tx_details ERROR', error)
                now_blocks_sync = false
            }
        }
    }
}

async function syncBlocks() {
    try {
        var count = blockInfo.height - lastBlock.height + 1
        if (count > 100) {
            count = 100
        }
        if (count < 0) {
            count = 1
        }
        let response = await get_blocks_details(lastBlock.height + 1, count)
        var localBlocks =
            response.data.result && response.data.result.blocks
                ? response.data.result.blocks
                : []
        if (localBlocks.length && lastBlock.id === localBlocks[0].prev_id) {
            block_array = localBlocks
            await syncTransactions()
            if (lastBlock.height >= blockInfo.height - 1) {
                now_blocks_sync = false
                enabled_during_sync = true
            } else {
                await delay(serverTimeout)
                await syncBlocks()
            }
        } else {
            const deleteCount = 100
            const height = parseInt(lastBlock.height) - deleteCount
            db.prepare('DELETE FROM blocks WHERE height > ?;').run(height)
            db.prepare('DELETE FROM charts WHERE height >  ?;').run(height)
            db.prepare('DELETE FROM transactions WHERE keeper_block >  ?;').run(
                height
            )
            db.prepare(
                'UPDATE aliases SET enabled=1 WHERE transact IN (SELECT transact FROM aliases WHERE alias IN (select alias from aliases where block > ?;'
            ).run(height)
            db.prepare('DELETE FROM aliases WHERE block >  ?;').run(height)
            db.prepare('DELETE FROM out_info WHERE block > ?;').run(height)
            const row = db
                .prepare(
                    'SELECT * FROM blocks WHERE  height=(SELECT MAX(height) FROM blocks);'
                )
                .get()
            if (row) {
                lastBlock = row
            } else {
                lastBlock = {
                    height: -1,
                    id: '0000000000000000000000000000000000000000000000000000000000000000'
                }
            }
            await delay(serverTimeout)
            await syncBlocks()
        }
    } catch (error) {
        log('syncBlocks() get_blocks_details ERROR', error)
        now_blocks_sync = false
    }
}

async function syncAltBlocks() {
    statusSyncAltBlocks = true
    try {
        db.prepare('DELETE FROM alt_blocks').run()
        let response = await get_alt_blocks_details(0, countAltBlocksServer)
        for (var block of response.data.result.blocks) {
            db.prepare(
                'INSERT INTO alt_blocks VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
            ).run(
                block.height,
                block.timestamp,
                block.actual_timestamp,
                block.block_cumulative_size,
                block.id,
                block.type,
                block.difficulty.toString(),
                block.cumulative_diff_adjusted.toString(),
                block.cumulative_diff_precise.toString(),
                block.is_orphan ? 1 : 0,
                block.base_reward,
                block.total_fee.toString(),
                block.penalty,
                block.summary_reward,
                block.block_cumulative_size,
                block.this_block_fee_median,
                block.effective_fee_median,
                block.total_txs_size,
                JSON.stringify(block.transactions_details),
                block.miner_text_info,
                ''
            )
        }
        try {
            let rows = db
                .prepare('SELECT COUNT(*) AS height FROM alt_blocks')
                .get()
            if (rows) countAltBlocksDB = rows.height
            statusSyncAltBlocks = false
        } catch (error) {
            log('syncAltBlocks() ERROR', error)
        }
    } catch (error) {
        statusSyncAltBlocks = false
    }
}

const getTxPoolDetails = async (count) => {
    if (count === 0) {
        let result = await db.query('SELECT blob_size, fee, id, timestamp, false as "isNew" FROM pool ORDER BY timestamp DESC;')
        return result && result.rowCount > 0 ? result.rows : []  
    }

    const query = {
        text: 'SELECT blob_size, fee, id, timestamp, false as "isNew" FROM pool ORDER BY timestamp DESC limit $1;',
        values: [count ? count : 500]
    }
    let result = await db.query(query)
    // let a = [{blob_size: 10, fee: 10000000000, id:"734e0acf588a051abe774e766f611606096d401a7cd4623bdfad7ad57bc2542a", timestamp: "1652919533"},
    // {blob_size: 11, fee: 10000000000, id:"734e0acf588a051abe774e766f611606096d401a7cd4623bdfad7ad57bc2542a", timestamp: "1652919533"},
    // {blob_size: 12, fee: 10000000000, id:"734e0acf588a051abe774e766f611606096d401a7cd4623bdfad7ad57bc2542b", timestamp: "1652919533"},
    // {blob_size: 13, fee: 10000000000, id:"734e0acf588a051abe774e766f611606096d401a7cd4623bdfad7ad57bc2542c", timestamp: "1652919533"},
    // {blob_size: 14, fee: 10000000000, id:"734e0acf588a051abe774e766f611606096d401a7cd4623bdfad7ad57bc2542d", timestamp: "1652919533"},
    // {blob_size: 15, fee: 10000000000, id:"734e0acf588a051abe774e766f611606096d401a7cd4623bdfad7ad57bc2542e", timestamp: "1652919533"},
    // {blob_size: 16, fee: 10000000000, id:"734e0acf588a051abe774e766f611606096d401a7cd4623bdfad7ad57bc2542f", timestamp: "1652919533"},
    // {blob_size: 17, fee: 10000000000, id:"734e0acf588a051abe774e766f611606096d401a7cd4623bdfad7ad57bc2543a", timestamp: "1652919533"},
    // {blob_size: 18, fee: 10000000000, id:"734e0acf588a051abe774e766f611606096d401a7cd4623bdfad7ad57bc2543b", timestamp: "1652919533"},
    // {blob_size: 19, fee: 10000000000, id:"734e0acf588a051abe774e766f611606096d401a7cd4623bdfad7ad57bc2543c", timestamp: "1652919533"}]
    return result && result.rowCount > 0 ? result.rows : []
    // return a
}

const getVisibilityInfo = async () => {
    let result = {
        amount: 0,
        percentage: 0,
        balance: 0,
        unlocked_balance: 0
    }
    try {
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

        result.amount = stakedCoinsLast7Days.toNumber()
        
        let totalCoinsInvolvedInStaking =
        stakedCoinsLast7Days.isEqualTo(0)
        ? new BigNumber(0)
        : new BigNumber(result.balance)
        .multipliedBy(
            totalStakedCoins7Days.dividedBy(stakedCoinsLast7Days)
            )
                    
        let totalSupply = new BigNumber(res3.data.result.total_coins)
        
        // console.log('wallet balance ', result.balance)
        // console.log('staked coins 7 days ', stakedCoinsLast7Days.toNumber())
        // console.log('totalCoinsInvolvedInStaking ', new BigNumber(result.balance)
        //         .multipliedBy(
        //         totalStakedCoins7Days.dividedBy(stakedCoinsLast7Days)
        //         ).toNumber())
        // console.log('totalSupply ', totalSupply.toNumber())
        // console.log('percentage', totalCoinsInvolvedInStaking.dividedBy(totalSupply).multipliedBy(100).toNumber())

        result.percentage = totalCoinsInvolvedInStaking.dividedBy(totalSupply).multipliedBy(100).toFixed(4)
    } catch (error) {
        log('getVisibilityInfo() ERROR', error)
    }
    return JSON.stringify(result)
}

const emitSocketInfo = async () => {
    if (enabled_during_sync) {
        blockInfo.lastBlock = lastBlock.height
        io.emit('get_info', JSON.stringify(blockInfo))
        io.emit('get_visibility_info', await getVisibilityInfo())
    }
}

async function getInfoTimer() {
    if (now_delete_offers === false) {
        try {
            let response = await get_info()
            blockInfo = response.data.result
            countAliasesServer = blockInfo.alias_count
            countAltBlocksServer = blockInfo.alt_blocks_count
            countTrPoolServer = blockInfo.tx_pool_size

            if (statusSyncPool === false) {
                let rows = db
                    .prepare('SELECT COUNT(*) AS transactions FROM pool')
                    .get()
                let countTrPoolDB = 0
                if (rows) 
                    countTrPoolDB = rows.transactions
                if (countTrPoolDB !== countTrPoolServer) {
                    log(
                        'need update pool transactions db=' +
                            countTrPoolDB +
                            ' server=' +
                            countTrPoolServer
                    )
                    await syncPool()
                }
            }

            if (statusSyncAltBlocks === false) {
                if (countAltBlocksServer !== countAltBlocksDB) {
                    log(
                        'need update alt-blocks db=' +
                            countAltBlocksDB +
                            ' server=' +
                            countAltBlocksServer
                    )
                    await syncAltBlocks()
                }
            }
            if (
                lastBlock.height !== blockInfo.height - 1 &&
                now_blocks_sync === false
            ) {
                log(
                    'need update blocks db=' +
                        lastBlock.height +
                        ' server=' +
                        blockInfo.height
                )
                log(
                    'need update aliases db=' +
                        countAliasesDB +
                        ' server=' +
                        countAliasesServer
                )
                now_blocks_sync = true
                await syncBlocks()
                await emitSocketInfo()
            }
            await delay(10000)
            await getInfoTimer()
        } catch (error) {
            log('getInfoTimer() get_info error')
            blockInfo.daemon_network_state = 0
            await delay(300000)
            await getInfoTimer()
        }
    } else {
        await delay(10000)
        await getInfoTimer()
    }
}

const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

// API
app.get('/api/get_info/:flags', (req, res) => {
    let flags = req.params.flags
    axios({
        method: 'get',
        url: api,
        data: {
            method: 'getinfo',
            params: { flags: parseInt(flags) }
        },
        transformResponse: [(data) => JSON.parse(data)]
    })
        .then((response) => {
            res.send(JSON.stringify(response.data))
        })
        .catch(function (error) {
            log('api get_info', error)
        })
})

app.get('/api/get_total_coins', (req, res) => {
    axios({
        method: 'get',
        url: api,
        data: {
            method: 'getinfo',
            params: { flags: parseInt(4294967295) }
        },
        transformResponse: [(data) => JSON.parse(data)]
    })
        .then((response) => {
            let str = response.data.result.total_coins
            let result
            let totalCoins = Number(str)
            if (typeof totalCoins === 'number') {
                result = parseInt(totalCoins) / 1000000000000
            }
            let r2 = result.toFixed(2)
            res.send(r2)
        })
        .catch(function (error) {
            log('api get_info', error)
        })
})

app.get('/api/get_blocks_details/:start/:count', (req, res) => {
    let start = req.params.start
    let count = req.params.count
    axios({
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
        .then(function (response) {
            res.send(JSON.stringify(response.data))
        })
        .catch(function (error) {
            log('api get_blocks_details failed', error)
        })
})

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
            },
            transformResponse: [(data) => JSON.parse(data)]
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
            },
            transformResponse: [(data) => JSON.parse(data)]
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
            },
            transformResponse: [(data) => JSON.parse(data)]
        })
        req.json(response.data)
    })
)

app.get(
    '/api/get_pool_txs_details',
    exceptionHandler(async (req, res) => {
        const response = axios({
            method: 'get',
            url: api,
            data: {
                method: 'get_pool_txs_details'
            },
            transformResponse: [(data) => JSON.parse(data)]
        })
        req.json(response.data)
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
            },
            transformResponse: [(data) => JSON.parse(data)]
        })
        req.json(response.data)
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
            },
            transformResponse: [(data) => JSON.parse(data)]
        })
        req.json(response.data)
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
