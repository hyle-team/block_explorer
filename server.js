const fs = require('fs');
const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const axios = require('axios');
const JSONbig = require('json-bigint');
const BigNumber = require('bignumber.js');

let config = fs.readFileSync('config.json', 'utf8');
config = JSON.parse(config);
const api = config.api + '/json_rpc';
const front_port = config.front_port;

app.use(express.static('dist'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let maxCount = 1000;

function log(msg) {
    let t = new Date();
    console.log(t.getFullYear() + "-" + t.getMonth() + "-" + t.getDate() + " " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + "." + t.getMilliseconds() + " " + msg);
}

function get_info(callback) {
    axios({
        method: 'get',
        url: api,
        data: {
            method: 'getinfo',
            params: {'flags': 0x410},
        },
        transformResponse: [data => JSONbig.parse(data)]
    })
        .then(function (response) {
            callback(200, response.data);
        })
        .catch(function (error) {
            log('get_info failed', error);
            callback(400, error);
        });
}

function get_blocks_details(start, count, callback) {
    axios({
        method: 'get',
        url: api,
        data: {
            method: 'get_blocks_details',
            params: {
                "height_start": parseInt(start ? start : 0),
                "count": parseInt(count ? count : 10),
                "ignore_transactions": false
            },
        },
        transformResponse: [data => JSONbig.parse(data)]
    })
        .then(function (response) {
            callback(200, response.data);
        })
        .catch(function (error) {
            log('get_blocks_details failed', error);
            callback(400, error);
        });
}

function get_alt_blocks_details(offset, count, callback) {
    axios({
        method: 'get',
        url: api,
        data: {
            method: 'get_alt_blocks_details',
            params: {
                "offset": parseInt(offset),
                "count": parseInt(count)
            },
        },
        transformResponse: [data => JSONbig.parse(data)]
    })
        .then(function (response) {
            callback(200, response.data);
        })
        .catch(function (error) {
            log('get_alt_blocks_details failed', error);
            callback(400, error);
        });
}

function get_all_pool_tx_list(callback) {
    axios({
        method: 'get',
        url: api,
        data: {
            method: 'get_all_pool_tx_list',
        },
        transformResponse: [data => JSONbig.parse(data)]
    })
        .then(function (response) {
            callback(200, response.data);
        })
        .catch(function (error) {
            log('get_all_pool_tx_list failed', error);
            callback(400, error);
        });
}

function get_pool_txs_details(ids, callback) {
    axios({
        method: 'get',
        url: api,
        data: {
            method: 'get_pool_txs_details',
            params: {'ids': ids},
        },
        transformResponse: [data => JSONbig.parse(data)]
    })
        .then(function (response) {
            callback(200, response.data);
        })
        .catch(function (error) {
            log('get_pool_txs_details failed', error);
            callback(400, error);
        });

}

function get_tx_details(tx_hash, callback) {
    axios({
        method: 'get',
        url: api,
        data: {
            method: 'get_tx_details',
            params: {'tx_hash': tx_hash},
        },
        transformResponse: [data => JSONbig.parse(data)]
    })
        .then(function (response) {
            callback(200, response.data);
        })
        .catch(function (error) {
            log('get_tx_details failed', error);
            callback(400, error);
        });
}

function get_out_info(amount, i, callback) {
    axios({
        method: 'get',
        url: api,
        data: {
            method: 'get_out_info',
            params: {'amount': parseInt(amount), 'i': parseInt(i)},
        },
        transformResponse: [data => JSONbig.parse(data)]
    })
        .then(function (response) {
            callback(200, response.data);
        })
        .catch(function (error) {
            log('get_out_info failed', error);
            callback(400, error);
        });
}

app.get('/get_info', (req, res) => {
    blockInfo.lastBlock = lastBlock.height;
    res.send(JSON.stringify(blockInfo));
});

// Blockchain page
app.get('/get_blocks_details/:start/:count', (req, res) => {
    let start = req.params.start;
    let count = req.params.count;

    if (start && count) {
        db.serialize(function () {
            db.all("SELECT blocks.* FROM blocks " +
                "WHERE blocks.height >= ? " +
                "ORDER BY blocks.height ASC " +
                "LIMIT ?;", [start, count], function (err, rows) {
                res.send(JSON.stringify(rows));
            });
        });
    }
});

app.get('/get_main_block_details/:id', (req, res) => {
    let id = req.params.id.toLowerCase();;
    if (id) {
        db.serialize(function () {
            db.get("SELECT b2.id as next_id, b1.* FROM blocks as b1 left join blocks as b2 on b2.height > b1.height WHERE b1.id == ? ORDER BY b2.height ASC LIMIT 1;", [id], function (err, row) {
                if (row) {
                    db.all("SELECT * FROM transactions WHERE keeper_block == ? ;", [row.height], function (err2, rows2) {
                        for (let i = 0; i < rows2.length; i++) {
                            rows2[i].extra = JSON.parse(rows2[i].extra);
                            rows2[i].ins = JSONbig(rows2[i].ins);
                            rows2[i].outs = JSONbig(rows2[i].outs);
                            rows2[i].attachments = JSON.parse(rows2[i].attachments);
                        }
                        row.transactions_details = rows2;
                        res.send(JSON.stringify(row));
                    });
                } else {
                    res.send(JSON.stringify("block not found"));
                }
            });
        });
    }
});

app.get('/get_tx_pool_details/:count', (req, res) => {
    let count = req.params.count;
    if (count !== undefined) {
        db.serialize(function () {
            db.all("SELECT * FROM pool ORDER BY timestamp DESC limit ?", [count], function (err, rows) {
                res.send(JSON.stringify(rows));
            });

        });
    } else {
        res.send("Error. Need 'count' params");
    }
});


// Alt-blocks
app.get('/get_alt_blocks_details/:offset/:count', (req, res) => {
    let offset = req.params.offset;
    let count = req.params.count;

    if (count > maxCount) {
        count = maxCount;
    }
    db.all("SELECT * FROM alt_blocks ORDER BY height DESC limit ? offset ?", [count, offset], function (err, rows) {
        res.send(JSON.stringify(rows));
    });
});

app.get('/get_alt_block_details/:id', (req, res) => {
    let id = req.params.id.toLowerCase();
    if (id) {
        db.get("SELECT * FROM alt_blocks WHERE hash == ? ;", [id], function (err, row) {
            res.send(JSON.stringify(row));
        });
    }
});


// Transactions
app.get('/get_tx_details/:tx_hash', (req, res) => {
    let tx_hash = req.params.tx_hash.toLowerCase();
    if (tx_hash) {
        db.serialize(function () {
            db.all("SELECT transactions.*, blocks.id as block_hash, blocks.timestamp as block_timestamp FROM transactions LEFT JOIN blocks ON transactions.keeper_block = blocks.height WHERE transactions.id == ? ;", [tx_hash], function (err, row) {
                if (row.length) {
                    res.send(JSON.stringify(row[0]));
                } else {
                    get_tx_details(tx_hash, function (code, data) {
                        if (code === 200) {
                            if (data.result !== undefined) {
                                res.send(JSON.stringify(data.result.tx_info));
                            } else {
                                res.send("Error. Need 'tx_hash' param");
                            }
                        } else {
                            res.send("Error. Need 'tx_hash' param");
                        }
                    });
                }
            });
        });
    }
});

app.get('/get_out_info/:amount/:i', (req, res) => {
    let amount = req.params.amount;
    let i = req.params.i;

    if (amount !== undefined && i !== undefined) {
        db.get("SELECT * FROM out_info WHERE amount = ? AND i = ?", [amount, i], function (err, row) {
            if (row === undefined) {
                get_out_info(amount, i, function (code, data) {
                    res.send(JSON.stringify({tx_id: data.result.tx_id}));
                });
            } else {
                res.send(JSON.stringify(row));
            }
        });
    }

});


// Aliases
app.get('/get_aliases/:offset/:count/:search', (req, res) => {
    let offset = req.params.offset;
    let count = req.params.count;
    let search = req.params.search.toLowerCase();
    if (count > maxCount) {
        count = maxCount;
    }
    if (search === 'all' && offset !== undefined && count !== undefined) {
        db.serialize(function () {
            db.all("SELECT * FROM aliases WHERE enabled == 1 ORDER BY block DESC limit ? offset ?", [count, offset], function (err, rows) {
                res.send(JSON.stringify(rows));
            });
        });
    } else if (search !== undefined && offset !== undefined && count !== undefined) {
        db.serialize(function () {
            db.all("SELECT * FROM aliases WHERE enabled == 1 AND (alias LIKE '%" + search + "%' OR address LIKE '%" + search + "%' OR comment LIKE '%" + search + "%') ORDER BY block DESC limit ? offset ?", [count, offset], function (err, rows) {
                res.send(JSON.stringify(rows));
            });
        });
    }
});


// Charts
app.get('/get_chart/:chart/:period', (req, res) => {
    let chart = req.params.chart;
    let period = req.params.period; // temporarily unused

    if (chart !== undefined) {
        let period = Math.round(new Date().getTime() / 1000) - (24 * 3600); // + 86400000
        let period2 = Math.round(new Date().getTime() / 1000) - (48 * 3600); // + 86400000
        // if (params_object.period === 'day') {
        //   // period = parseInt((period.setDate(period.getDate() - 86400000)) / 1000);
        //   period = parseInt(period - 86400000) / 1000;
        //   console.log(period);
        // } else if (params_object.period === 'week') {
        //   period = parseInt((period.setDate(period.getDate()-7)) / 1000);
        // } else if (params_object.period === 'month') {
        //   period = parseInt((period.setMonth(period.getMonth()-1)) / 1000);
        // } else if (params_object.period === '3month') {
        //   period = parseInt((period.setMonth(period.getMonth()-3)) / 1000);
        // } else if (params_object.period === '6month') {
        //   period = parseInt((period.setMonth(period.getMonth()-6)) / 1000);
        // } else if (params_object.period === 'year') {
        //   period = parseInt((period.setMonth(period.getMonth()-12)) / 1000);
        // }
        if (chart === 'all') {
            db.serialize(function () {
                // Charts AvgBlockSize, AvgTransPerBlock, difficultyPoS, difficultyPoW
                db.all("SELECT actual_timestamp as at, block_cumulative_size as bcs, tr_count as trc, difficulty as d, type as t FROM charts WHERE actual_timestamp > " + period, function (err, arrayAll) {
                    if (err) {
                        log('all charts error', err);
                    } else {
                        // Chart Confirmed Transactions Per Day
                        db.all("SELECT actual_timestamp as at, SUM(tr_count) as sum_trc FROM charts GROUP BY strftime('%Y-%m-%d', datetime(actual_timestamp, 'unixepoch')) ORDER BY actual_timestamp;", function (err, rows0) {
                            if (err) {
                                log('all charts confirmed-transactions-per-day', err);
                            } else {
                                // Chart HashRate
                                db.all("SELECT actual_timestamp as at, difficulty120 as d120, hashrate100 as h100, hashrate400 as h400 FROM charts WHERE type=1 AND actual_timestamp > " + period2, function (err, rows1) {
                                    if (err) {
                                        log('all hashrate', err);
                                    } else {
                                        arrayAll[0] = rows0;
                                        arrayAll[1] = rows1;
                                        res.send(JSON.stringify(arrayAll));
                                    }
                                });
                            }
                        });
                    }
                });
            });
        } else if (chart === 'AvgBlockSize') {
            db.serialize(function () {
                db.all("SELECT actual_timestamp as at, avg(block_cumulative_size) as bcs FROM charts GROUP BY strftime('%Y-%m-%d, %H', datetime(actual_timestamp, 'unixepoch')) ORDER BY actual_timestamp", function (err, rows) {
                    if (err) {
                        log('AvgBlockSize', err);
                    } else {
                        res.send(JSON.stringify(rows));
                    }
                });
            });
        } else if (chart === 'AvgTransPerBlock') {
            db.serialize(function () {
                db.all("SELECT actual_timestamp as at, avg(tr_count) as trc FROM charts GROUP BY strftime('%Y-%m-%d, %H', datetime(actual_timestamp, 'unixepoch')) ORDER BY actual_timestamp", function (err, rows) {
                    if (err) {
                        log('AvgTransPerBlock', err);
                    } else {
                        res.send(JSON.stringify(rows));
                    }
                });
            });
        } else if (chart === 'hashRate') {
            db.serialize(function () {
                db.all("SELECT actual_timestamp as at, avg(difficulty120) as d120, avg(hashrate100) as h100, avg(hashrate400) as h400 FROM charts WHERE type=1 GROUP BY strftime('%Y-%m-%d, %H', datetime(actual_timestamp, 'unixepoch')) ORDER BY actual_timestamp", function (err, rows) {
                    if (err) {
                        log('hashrate', err);
                    } else {
                        // for (let i = 0; i < rows.length; i++) {
                        //     rows[i]['hashrate100'] = (i > 99) ? ((rows[i]['cumulative_diff_precise'] - rows[i - 100]['cumulative_diff_precise']) / (rows[i]['actual_timestamp'] - rows[i - 100]['actual_timestamp'])) : 0;
                        //     rows[i]['hashrate400'] = (i > 399) ? ((rows[i]['cumulative_diff_precise'] - rows[i - 400]['cumulative_diff_precise']) / (rows[i]['actual_timestamp'] - rows[i - 400]['actual_timestamp'])) : 0;
                        // }
                        res.send(JSON.stringify(rows));
                    }
                });
            });
        } else if (chart === 'pos-difficulty') {
            db.serialize(function () {
                db.all("SELECT actual_timestamp as at, difficulty as d FROM charts WHERE type=0 ORDER BY actual_timestamp", function (err, rows) {
                    if (err) {
                        log('pos-difficulty', err);
                    } else {
                        res.send(JSON.stringify(rows));
                    }
                });
            });
        } else if (chart === 'pow-difficulty') {
            db.serialize(function () {
                db.all("SELECT actual_timestamp as at, difficulty as d FROM charts WHERE type=1  ORDER BY actual_timestamp", function (err, rows) {
                    if (err) {
                        log('pow-difficulty', err);
                    } else {
                        res.send(JSON.stringify(rows));
                    }
                });
            });
        } else if (chart === 'ConfirmTransactPerDay') {
            db.serialize(function () {
                db.all("SELECT actual_timestamp as at, SUM(tr_count) as sum_trc FROM charts GROUP BY strftime('%Y-%m-%d', datetime(actual_timestamp, 'unixepoch')) ORDER BY actual_timestamp;", function (err, rows) {
                    if (err) {
                        log('ConfirmTransactPerDay', err);
                    } else {
                        res.send(JSON.stringify(rows));
                    }
                });
            });
        }
    }


});

// Search
app.get('/search_by_id/:id', (req, res) => {
    let id = req.params.id.toLowerCase();
    console.log(id)
    if (id) {
        db.get("SELECT * FROM blocks WHERE id == ? ;", [id], function (err, row) {
            if (row === undefined) {
                db.get("SELECT * FROM alt_blocks WHERE hash == ? ;", [id], function (err, row) {
                    if (row === undefined) {
                        db.get("SELECT * FROM transactions WHERE id == ? ;", [id], function (err, row) {
                            if (row === undefined) {
                                get_tx_details(id, function (code, data) {
                                    if (code === 200) {
                                        if (data.result) {
                                            res.send(JSON.stringify({result: "tx"}));
                                        } else {
                                            db.all("SELECT * FROM aliases WHERE enabled == 1 AND (alias LIKE '%" + id + "%' OR address LIKE '%" + id + "%' OR comment LIKE '%" + id + "%') ORDER BY block DESC limit ? offset ?", [1, 0], function (err, rows) {
                                                if(rows.length>0) {
                                                    res.send(JSON.stringify({result: 'alias'}));
                                                } else {
                                                    res.send(JSON.stringify({result: "NOT FOUND"}));
                                                }
                                            });
                                        }
                                    } else {
                                        res.send(JSON.stringify({result: "NOT FOUND"}));
                                    }
                                });
                            } else {
                                res.send(JSON.stringify({result: "tx"}));
                            }
                        });
                    } else {
                        res.send(JSON.stringify({result: "alt_block"}));
                    }
                });
            } else {
                res.send(JSON.stringify({result: "block"}));
            }
        });
    }
});


var lastBlock = {
    height: -1,
    id: "0000000000000000000000000000000000000000000000000000000000000000"
};



var blockInfo = {};
var now_blocks_sync = false;

// market
var now_delete_offers = false;

// pool
var countTrPoolServer;
var statusSyncPool = false;

// aliases
var countAliasesDB;
var countAliasesServer;

// alt_blocks
var countAltBlocksDB = 0;
var countAltBlocksServer;
var statusSyncAltBlocks = false;

var db = new sqlite3.Database('db');
db.configure('busyTimeout', 30000);
db.serialize(function () {
    db.run("create table if not exists blocks (height INTEGER UNIQUE" +
        ", actual_timestamp INTEGER" +
        ", base_reward TEXT" +
        ", blob TEXT" +
        ", block_cumulative_size INTEGER" +
        ", block_tself_size TEXT" +
        ", cumulative_diff_adjusted TEXT" +
        ", cumulative_diff_precise TEXT" +
        ", difficulty TEXT" +
        ", effective_fee_median TEXT" +
        ", id TEXT" +
        ", is_orphan INTEGER" +
        ", penalty TEXT" +
        ", prev_id TEXT" +
        ", summary_reward TEXT" +
        ", this_block_fee_median TEXT" +
        ", timestamp INTEGER" +
        ", total_fee TEXT" +
        ", total_txs_size INTEGER" +
        ", tr_count INTEGER" +
        ", type INTEGER" +
        ", miner_text_info TEXT" +
        ", pow_seed TEXT" +
        ");");

    db.run("CREATE INDEX if not exists index_bl_height ON blocks(height);");
    db.run("CREATE INDEX if not exists index_bl_id ON blocks(id);");

    db.run("create table if not exists transactions (keeper_block INTEGER, " +
        "id TEXT, " +
        "amount TEXT," +
        "blob_size INTEGER," +
        "extra TEXT," +
        "fee TEXT," +
        "ins TEXT," +
        "outs TEXT," +
        "pub_key TEXT," +
        "timestamp INTEGER," +
        "attachments TEXT" +
        ");");

    db.run("CREATE INDEX if not exists index_tr_keeper_block ON transactions(keeper_block);");
    db.run("CREATE INDEX if not exists index_tr_id ON transactions(id);");

    db.run('create table if not exists aliases (' +
        'alias TEXT,' +
        'address TEXT,' +
        'comment TEXT,' +
        'tracking_key TEXT,' +
        'block INTEGER,' +
        'transact TEXT,' +
        'enabled INTEGER' +
        ');');

    db.run("CREATE INDEX if not exists index_al_block ON aliases(block);");

    db.run('create table if not exists alt_blocks (' +
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
        ');');

    db.run("CREATE INDEX if not exists index_ab_hash ON alt_blocks(hash);");

    db.run('create table if not exists pool (' +
        'blob_size TEXT,' +
        'fee TEXT,' +
        'id TEXT,' +
        'timestamp TEXT' +
        ');');

    db.run("CREATE INDEX if not exists index_pool_id ON pool(id);");

    db.run('create table if not exists charts (' +
        "height INTEGER" +
        ", actual_timestamp INTEGER" +
        ", block_cumulative_size INTEGER" +
        ", cumulative_diff_precise TEXT" +
        ", difficulty TEXT" +
        ", tr_count INTEGER" +
        ", type INTEGER" +
        ", difficulty120 TEXT" +
        ", hashrate100 TEXT" +
        ", hashrate400 TEXT" +
        ');');

    db.run("CREATE INDEX if not exists index_bl_height ON charts(height);");


    db.run("DELETE FROM alt_blocks");
    db.get("SELECT * FROM blocks WHERE height=(SELECT MAX(height) FROM blocks)", [], function (err, row) {
        if (err) log('select from blocks', err);
        if (row) {
            lastBlock = row;
        }
        db.get("SELECT COUNT(*) AS alias FROM aliases", function (err, row) {
            if (err) log('select count alias', err);
            if (row) {
                countAliasesDB = row.alias;
            }
            db.get("SELECT COUNT(*) AS height FROM alt_blocks", function (err, row) {
                if (err) log('select count alt-blocks', err);
                if (row) {
                    countAltBlocksDB = row.height;
                }
                getInfoTimer();
            });
        });
    });


    db.run('create table if not exists out_info (' +
        'amount TEXT,' +
        'i INTEGER,' +
        'tx_id TEXT,' +
        'block INTEGER' +
        ');');

    db.run("CREATE UNIQUE INDEX if not exists index_out_info ON out_info(amount, i, tx_id);");

});

var block_array = [];
var pools_array = [];

var serverTimeout = 3000;

function syncPool() {
    statusSyncPool = true;
    countTrPoolServer = blockInfo.tx_pool_size;
    if (countTrPoolServer === 0) {
        db.run("DELETE FROM pool");
        statusSyncPool = false;
    } else {
        get_all_pool_tx_list(function (code, data) {
            if (code === 200) {
                if (data.result.ids) {
                    pools_array = (data.result.ids) ? data.result.ids : [];
                    db.serialize(function () {
                        db.run("DELETE FROM pool WHERE id NOT IN ( '" + pools_array.join("','") + "' );", function (err) {
                            if (err) {
                                log('pool delete', err);
                            }
                        });
                    });

                    db.all("SELECT id FROM pool", function (err, rows) {
                        if (err) log('select id from pool', err);
                        var new_ids = [];
                        for (var j = 0; j < pools_array.length; j++) {
                            var find = false;
                            for (var i = 0; i < rows.length; i++) {
                                if (pools_array[j] === rows[i].id) {
                                    find = true;
                                    break;
                                } else {
                                    log('pools_array[j] !== rows[i].id');
                                }
                            }
                            if (!find) {
                                new_ids.push(pools_array[j]);
                            }
                        }

                        if (new_ids.length) {
                            get_pool_txs_details(new_ids, function (code, data) {
                                if (code === 200) {
                                    if (data.result && data.result.txs) {
                                        db.serialize(function () {
                                            db.run("begin transaction");
                                            var stmt = db.prepare("INSERT INTO pool VALUES (?,?,?,?)");
                                            for (var x in data.result.txs) {
                                                stmt.run(
                                                    data.result.txs[x].blob_size,
                                                    data.result.txs[x].fee,
                                                    data.result.txs[x].id,
                                                    data.result.txs[x].timestamp
                                                );
                                            }
                                            stmt.finalize();
                                            db.run("commit");
                                            statusSyncPool = false;
                                        });
                                    } else {
                                        statusSyncPool = false;
                                    }
                                } else {
                                    statusSyncPool = false;
                                }
                            });
                        } else {
                            statusSyncPool = false;
                        }
                    });
                } else {
                    statusSyncPool = false;
                }
            } else {
                db.run("DELETE FROM pool");
                statusSyncPool = false;
            }
        });
    }
}


function parseComment(comment) {
    var splitComment = comment.split(/\s*,\s*/);
    var splitResult = splitComment[4];
    if (splitResult) {
        var result = splitResult.split(/\s*"\s*/);
        var input = result[3].toString();
        if (input) {
            var output = new Buffer(input, 'hex');
            return output.toString();
        } else {
            return "";
        }
    } else {
        return "";
    }
}


function parseTrackingKey(trackingKey) {
    var splitKey = trackingKey.split(/\s*,\s*/);
    var resultKey = splitKey[5];
    if (resultKey) {
        var key = resultKey.split(':');
        var keyValue = key[1].replace(/\[|\]/g, '');
        if (keyValue) {
            keyValue.toString();
            keyValue = keyValue.replace(/\s+/g, '');
            return keyValue;
        } else {
            return '';
        }
    } else {
        return '';
    }
}


function syncTransactions(success) {
    if (block_array.length === 0) {
        success();
    } else {
        var localBl = block_array[0];
        if (localBl.transactions_details.length === 0) {

            if (localBl.tr_out.length === 0) {
                db.serialize(function () {
                    db.run("begin transaction");

                    var hashrate100 = 0;
                    var hashrate400 = 0;

                    if (localBl.type === 1) {
                        db.all("SELECT height, actual_timestamp, cumulative_diff_precise FROM charts WHERE type=1", function (err, rows) {
                            if (err) {
                                log('syncTransactions', err);
                            } else {
                                for (let i = 0; i < rows.length; i++) {
                                    hashrate100 = (i > 99 - 1) ? ((localBl['cumulative_diff_precise'] - rows[rows.length - 100]['cumulative_diff_precise']) / (localBl['actual_timestamp'] - rows[rows.length - 100]['actual_timestamp'])) : 0;
                                    hashrate400 = (i > 399 - 1) ? ((localBl['cumulative_diff_precise'] - rows[rows.length - 400]['cumulative_diff_precise']) / (localBl['actual_timestamp'] - rows[rows.length - 400]['actual_timestamp'])) : 0;
                                }

                                var stmtCharts = db.prepare("INSERT INTO charts VALUES (?,?,?,?,?,?,?,?,?,?)");
                                stmtCharts.run(
                                    localBl.height,
                                    localBl.actual_timestamp,
                                    localBl.block_cumulative_size,
                                    localBl.cumulative_diff_precise.toString(),
                                    localBl.difficulty.toString(),
                                    (localBl.tr_count) ? localBl.tr_count : 0,
                                    localBl.type,
                                    (localBl.difficulty / 120).toFixed(0),
                                    hashrate100,
                                    hashrate400
                                );
                                stmtCharts.finalize();
                            }
                        });
                    } else {
                        var stmtCharts = db.prepare("INSERT INTO charts VALUES (?,?,?,?,?,?,?,?,?,?)");
                        stmtCharts.run(
                            localBl.height,
                            localBl.actual_timestamp,
                            localBl.block_cumulative_size,
                            localBl.cumulative_diff_precise.toString(),
                            localBl.difficulty.toString(),
                            (localBl.tr_count) ? localBl.tr_count : 0,
                            localBl.type,
                            0,
                            0,
                            0
                        );
                        stmtCharts.finalize();
                    }


                    var stmt = db.prepare("INSERT INTO blocks VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
                    stmt.run(
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
                        localBl.is_orphan,
                        localBl.penalty,
                        localBl.prev_id,
                        localBl.summary_reward,
                        localBl.this_block_fee_median,
                        localBl.timestamp,
                        localBl.total_fee.toString(),
                        localBl.total_txs_size,
                        (localBl.tr_count) ? localBl.tr_count : 0,
                        localBl.type,
                        localBl.miner_text_info,
                        localBl.pow_seed
                    );
                    stmt.finalize();
                    lastBlock = block_array.splice(0, 1)[0];
                    db.run("commit");
                });
                log("BLOCKS: db =" + lastBlock.height + '/server =' + blockInfo.height + " transaction left = " + localBl.tr_count);
                setTimeout(function () {
                    syncTransactions(success);
                }, serverTimeout);
            } else {
                var localOut = localBl.tr_out[0];
                let localOutAmount = (new BigNumber(localOut.amount)).toNumber();

                get_out_info(localOutAmount, localOut.i, function (code, data2) {
                    if (code === 200) {
                        db.serialize(function () {
                            db.run("begin transaction");
                            var stmt = db.prepare("REPLACE INTO out_info VALUES (?,?,?,?)");
                            stmt.run(
                                localOut.amount.toString(),
                                localOut.i,
                                data2.result.tx_id,
                                localBl.height
                            );
                            stmt.finalize();
                            localBl.tr_out.splice(0, 1);
                            db.run("commit");
                        });
                        log("tr_out left = " + localBl.tr_out.length);
                        setTimeout(function () {
                            syncTransactions(success);
                        }, serverTimeout);
                    } else {
                        log('syncTransactions() get_out_info ERROR');
                        log(data2);
                        now_blocks_sync = false;
                    }
                });
            }
        } else {
            if (localBl.tr_count === undefined) localBl.tr_count = localBl.transactions_details.length;
            if (localBl.tr_out === undefined) localBl.tr_out = [];
            var localTr = localBl.transactions_details.splice(0, 1)[0];
            get_tx_details(localTr.id, function (code, data) {
                if (code === 200 && data.result.tx_info) {
                    var extra = data.result.tx_info.extra;
                    var attachments = data.result.tx_info.attachments;

                    for (var item in extra) {
                        if (extra[item].type === 'alias_info') {
                            db.serialize(function () {
                                var arr = extra[item].short_view.split('-->');
                                var aliasName = arr[0];
                                var aliasAddress = arr[1];
                                var aliasComment = parseComment(extra[item].datails_view);
                                var aliasTrackingKey = parseTrackingKey(extra[item].datails_view);
                                var aliasBlock = localBl.height;
                                var aliasTransaction = localTr.id;
                                db.run("UPDATE aliases SET enabled=0 WHERE alias == '" + aliasName + "';");
                                var stmt = db.prepare("REPLACE INTO aliases VALUES (?,?,?,?,?,?,?)");
                                stmt.run(
                                    aliasName,
                                    aliasAddress,
                                    aliasComment,
                                    aliasTrackingKey,
                                    aliasBlock,
                                    aliasTransaction,
                                    1
                                );
                                stmt.finalize();
                            });
                        }
                    }

                    var ins = data.result.tx_info.ins;
                    for (var item in ins) {
                        if (ins[item].global_indexes) {
                            localBl.tr_out.push({amount: ins[item].amount, i: ins[item].global_indexes[0]});
                        }
                    }

                    db.serialize(function () {
                        db.run("begin transaction");
                        var stmt = db.prepare("REPLACE INTO transactions VALUES (?,?,?,?,?,?,?,?,?,?,?)");
                        stmt.run(
                            data.result.tx_info.keeper_block,
                            data.result.tx_info.id,
                            data.result.tx_info.amount.toString(),
                            data.result.tx_info.blob_size,
                            JSON.stringify(data.result.tx_info.extra),
                            data.result.tx_info.fee.toString(),
                            JSON.stringify(data.result.tx_info.ins),
                            JSON.stringify(data.result.tx_info.outs),
                            data.result.tx_info.pub_key,
                            data.result.tx_info.timestamp,
                            JSON.stringify(data.result.tx_info.attachments)
                        );
                        stmt.finalize();
                        db.run("commit");
                    });
                    setTimeout(function () {
                        log("BLOCKS: db =" + localBl.height + '/ server =' + blockInfo.height + " transaction left = " + localBl.transactions_details.length);
                        syncTransactions(success);
                    }, serverTimeout);
                } else {
                    log('syncTransactions() get_tx_details ERROR');
                    log(data);
                    now_blocks_sync = false;
                }
            });
        }
    }
}

function syncBlocks() {
    var count = blockInfo.height - lastBlock.height + 1;
    if (count > 100) {
        count = 100;
    }
    if (count < 0) {
        count = 1;
    }
    get_blocks_details(lastBlock.height + 1, count, function (code2, body2) {
        if (code2 === 200) {
            var localBlocks = (body2.result && body2.result.blocks) ? body2.result.blocks : [];
            if (localBlocks.length && lastBlock.id === localBlocks[0].prev_id) {
                block_array = localBlocks;
                syncTransactions(function () {
                    if (lastBlock.height >= blockInfo.height - 1) {
                        now_blocks_sync = false;
                    } else {
                        setTimeout(function () {
                            syncBlocks();
                        }, serverTimeout);
                    }
                });
            } else {
                db.serialize(function () {
                    var deleteCount = 100;
                    log("height > " + (parseInt(lastBlock.height) - deleteCount) + " deleted");
                    db.run("DELETE FROM blocks WHERE height > " + (parseInt(lastBlock.height) - deleteCount) + ";");
                    db.run("DELETE FROM charts WHERE height > " + (parseInt(lastBlock.height) - deleteCount) + ";");
                    db.run("DELETE FROM transactions WHERE keeper_block > " + (parseInt(lastBlock.height) - deleteCount) + ";");
                    db.run("UPDATE aliases SET enabled=1 WHERE transact IN (SELECT transact FROM aliases WHERE alias IN (select alias from aliases where block > " + (parseInt(lastBlock.height) - deleteCount) + " ) AND enabled == 0 GROUP BY alias);");
                    db.run("DELETE FROM aliases WHERE block > " + (parseInt(lastBlock.height) - deleteCount) + ";");
                    db.run("DELETE FROM out_info WHERE block > " + (parseInt(lastBlock.height) - deleteCount) + ";");
                    db.get("SELECT * FROM blocks WHERE  height=(SELECT MAX(height) FROM blocks)", [], function (err, row) {
                        if (row) {
                            lastBlock = row;
                        } else {
                            lastBlock = {
                                height: -1,
                                id: "0000000000000000000000000000000000000000000000000000000000000000"
                            }
                        }
                        setTimeout(function () {
                            syncBlocks();
                        }, serverTimeout);
                    });
                });
            }
        } else {
            log('syncBlocks() get_blocks_details ERROR');
            log(body2);
            now_blocks_sync = false;
        }
    });
}

function syncAltBlocks() {
    statusSyncAltBlocks = true;
    db.run("DELETE FROM alt_blocks", function () {
        get_alt_blocks_details(0, countAltBlocksServer, function (code, data) {
            if (code === 200) {
                db.serialize(function () {
                    var stmt = db.prepare('INSERT INTO alt_blocks VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)');
                    for (var x in data.result.blocks) {
                        var height = data.result.blocks[x].height;
                        var timestamp = data.result.blocks[x].timestamp;
                        var actual_timestamp = data.result.blocks[x].actual_timestamp;
                        var size = data.result.blocks[x].block_cumulative_size;
                        var hash = data.result.blocks[x].id;
                        var type = data.result.blocks[x].type;
                        var difficulty = data.result.blocks[x].difficulty.toString();
                        var cumulative_diff_adjusted = data.result.blocks[x].cumulative_diff_adjusted.toString();
                        var cumulative_diff_precise = data.result.blocks[x].cumulative_diff_precise.toString();
                        var is_orphan = data.result.blocks[x].is_orphan;
                        var base_reward = data.result.blocks[x].base_reward;
                        var total_fee = data.result.blocks[x].total_fee.toString();
                        var penalty = data.result.blocks[x].penalty;
                        var summary_reward = data.result.blocks[x].summary_reward;
                        var block_cumulative_size = data.result.blocks[x].block_cumulative_size;
                        var this_block_fee_median = data.result.blocks[x].this_block_fee_median;
                        var effective_fee_median = data.result.blocks[x].effective_fee_median;
                        var total_txs_size = data.result.blocks[x].total_txs_size;
                        var transact_details = JSON.stringify(data.result.blocks[x].transactions_details);
                        var miner_txt_info = data.result.blocks[x].miner_text_info;
                        var pow_seed = '';
                        stmt.run(
                            height,
                            timestamp,
                            actual_timestamp,
                            size,
                            hash,
                            type,
                            difficulty,
                            cumulative_diff_adjusted,
                            cumulative_diff_precise,
                            is_orphan,
                            base_reward,
                            total_fee,
                            penalty,
                            summary_reward,
                            block_cumulative_size,
                            this_block_fee_median,
                            effective_fee_median,
                            total_txs_size,
                            transact_details,
                            miner_txt_info,
                            pow_seed
                        );
                    }
                    stmt.finalize();
                    db.get("SELECT COUNT(*) AS height FROM alt_blocks", function (err, rows) {
                        if (err) log(err);
                        if (rows) {
                            countAltBlocksDB = rows.height;
                        }
                        statusSyncAltBlocks = false;
                    });
                });
            } else {
                statusSyncAltBlocks = false;
            }
        });
    });
}

function getInfoTimer() {
    if (now_delete_offers === false) {
        get_info(function (code, body) {
            if (code === 200) {
                blockInfo = body.result;
                countAliasesServer = blockInfo.alias_count;
                countAltBlocksServer = blockInfo.alt_blocks_count;
                countTrPoolServer = blockInfo.tx_pool_size;

                if (statusSyncPool === false) {
                    db.get("SELECT COUNT(*) AS transactions FROM pool", function (err, rows) {
                        if (err) log(err);
                        if (rows) {
                            if (rows.transactions !== countTrPoolServer) {
                                log("need update pool transactions db=" + rows.transactions + ' server=' + countTrPoolServer);
                                syncPool();
                            }
                        }
                    });
                }

                if (statusSyncAltBlocks === false) {
                    if (countAltBlocksServer !== countAltBlocksDB) {
                        log("need update alt-blocks db=" + countAltBlocksDB + ' server=' + countAltBlocksServer);
                        syncAltBlocks();
                    }
                }
                if (lastBlock.height !== blockInfo.height - 1 && now_blocks_sync === false) {
                    log("need update blocks db=" + lastBlock.height + ' server=' + blockInfo.height);
                    log("need update aliases db=" + countAliasesDB + ' server=' + countAliasesServer);
                    now_blocks_sync = true;
                    syncBlocks();
                }

                setTimeout(function () {
                    getInfoTimer();
                }, 10000);
            } else {
                log("getInfoTimer() get_info error");
                blockInfo.daemon_network_state = 0;

                setTimeout(function () {
                    getInfoTimer();
                }, 300000);
            }
        });
    } else {
        setTimeout(function () {
            getInfoTimer();
        }, 10000);
    }
}


// API
app.get('/api/get_info/:flags', (req, res) => {
    let flags = req.params.flags;
    axios({
        method: 'get',
        url: api,
        data: {
            method: 'getinfo',
            params: {'flags': parseInt(flags)},
        },
        transformResponse: [data => JSONbig.parse(data)]
    })
        .then((response) => {
            res.send(JSON.stringify(response.data));
        })
        .catch(function (error) {
            log('api get_info', error);
        });
});

app.get('/api/get_total_coins', (req, res) => {
    axios({
        method: 'get',
        url: api,
        data: {
            method: 'getinfo',
            params: {'flags': parseInt(4294967295)},
        },
        transformResponse: [data => JSONbig.parse(data)]
    })
        .then((response) => {
            let str = response.data.result.total_coins;
            let result;
            let totalCoins = Number(str);
            if (typeof totalCoins === 'number') {
                result = parseInt(totalCoins) / 1000000000000;
            }
            let r2 = result.toFixed(2);
            res.send(r2);
        })
        .catch(function (error) {
            log('api get_info', error);
        });
});

app.get('/api/get_blocks_details/:start/:count', (req, res) => {
    let start = req.params.start;
    let count = req.params.count;
    axios({
        method: 'get',
        url: api,
        data: {
            method: 'get_blocks_details',
            params: {
                "height_start": parseInt(start ? start : 0),
                "count": parseInt(count ? count : 10),
                "ignore_transactions": false
            },
        },
        transformResponse: [data => JSONbig.parse(data)]
    })
        .then(function (response) {
            res.send(JSON.stringify(response.data));
        })
        .catch(function (error) {
            log('api get_blocks_details failed', error);
        });
});

app.get('/api/get_main_block_details/:id', (req, res) => {
    let id = req.params.id;
    axios({
        method: 'get',
        url: api,
        data: {
            method: 'get_main_block_details',
            params: {
                'id': id
            },
        },
        transformResponse: [data => JSONbig.parse(data)]
    })
        .then(function (response) {
            res.send(JSON.stringify(response.data));
        })
        .catch(function (error) {
            log('api get_main_block_details failed', error);
        });
});

app.get('/api/get_alt_blocks_details/:offset/:count', (req, res) => {
    let offset = req.params.offset;
    let count = req.params.count;
    axios({
        method: 'get',
        url: api,
        data: {
            method: 'get_alt_blocks_details',
            params: {
                "offset": parseInt(offset),
                "count": parseInt(count)
            },
        },
        transformResponse: [data => JSONbig.parse(data)]
    })
        .then(function (response) {
            res.send(JSON.stringify(response.data));
        })
        .catch(function (error) {
            log('api get_alt_blocks_details failed', error);
        });
});

app.get('/api/get_alt_block_details/:id', (req, res) => {
    let id = req.params.id;
    axios({
        method: 'get',
        url: api,
        data: {
            method: 'get_alt_block_details',
            params: {
                'id': id
            },
        },
        transformResponse: [data => JSONbig.parse(data)]
    })
        .then(function (response) {
            res.send(JSON.stringify(response.data));
        })
        .catch(function (error) {
            log('api get_alt_block_details failed', error);
        });
});

app.get('/api/get_all_pool_tx_list', (req, res) => {
    axios({
        method: 'get',
        url: api,
        data: {
            method: 'get_all_pool_tx_list',
        },
        transformResponse: [data => JSONbig.parse(data)]
    })
        .then((response) => {
            res.send(JSON.stringify(response.data));
        })
        .catch(function (error) {
            log('api get_all_pool_tx_list failed', error);
        });
});

app.get('/api/get_pool_txs_details', (req, res) => {
    axios({
        method: 'get',
        url: api,
        data: {
            method: 'get_pool_txs_details',
        },
        transformResponse: [data => JSONbig.parse(data)]
    })
        .then((response) => {
            res.send(JSON.stringify(response.data));
        })
        .catch(function (error) {
            log('api get_pool_txs_details failed', error);
        });
});

app.get('/api/get_pool_txs_brief_details', (req, res) => {
    axios({
        method: 'get',
        url: api,
        data: {
            method: 'get_pool_txs_brief_details',
        },
        transformResponse: [data => JSONbig.parse(data)]
    })
        .then((response) => {
            res.send(JSON.stringify(response.data));
        })
        .catch(function (error) {
            log('api get_pool_txs_details failed', error);
        });
});

app.get('/api/get_tx_details/:tx_hash', (req, res) => {
    let tx_hash = req.params.tx_hash;
    axios({
        method: 'get',
        url: api,
        data: {
            method: 'get_tx_details',
            params: {'tx_hash': tx_hash},
        },
        transformResponse: [data => JSONbig.parse(data)]
    })
        .then((response) => {
            res.send(JSON.stringify(response.data));
        })
        .catch(function (error) {
            log('api get_tx_details failed', error);
        });
});

// app.get('/api/get_out_info/:amount/:i', (req, res) => {
//     let amount = req.params.amount;
//     let i = req.params.i;
//     axios({
//         method: 'get',
//         url: api,
//         data: {
//             method: 'get_out_info',
//             params: {'amount': amount, 'i': i},
//         },
//         transformResponse: [data => JSONbig.parse(data)]
//     })
//         .then((response) => {
//             res.send(JSON.stringify(response.data));
//         })
//         .catch(function (error) {
//             log('api get_tx_details failed', error);
//         });
// });

app.use(function (req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

// Start the server
const server = app.listen(parseInt(front_port), (req, res, error) => {
    if (error) return log(`Error: ${error}`);
    log(`Server listening on port ${server.address().port}`);
});