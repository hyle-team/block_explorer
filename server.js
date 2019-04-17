var http = require('http');
var static = require('node-static');
var file = new static.Server('./dist');
var request = require('request');
var fs = require('fs');
const axios = require('axios');
var sqlite3 = require('sqlite3').verbose();
var JSONbig = require('json-bigint');
const BigNumber = require('bignumber.js');
var config = fs.readFileSync('config.json', 'utf8');
config = JSON.parse(config);
var api = config.api + '/json_rpc';
var front_port = config.front_port;


function get_blocks_details(start, count, callback) {
    axios({
        method: 'post',
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
            log('POST get_blocks_details failed');
            callback(400, error);
        });
}

function get_alt_blocks_details(offset, count, callback) {
    axios({
        method: 'post',
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
            log('POST get_alt_blocks_details failed');
            callback(400, error);
        });
}

// all_list_tx
function get_all_pool_tx_list(callback) {
    var params = {
        "method": "get_all_pool_tx_list",
        "params": {}
    };
    request.post(api, {json: params}, function (error, response, body) {
        if (error) callback(400, error); else callback(200, body);
    });
}

// brief tx_information
// function get_pool_txs_brief_details(ids, callback) {
//   var params = {
//     "method": "get_pool_txs_brief_details",
//     "params": {
//       "ids": ids
//     }
//   };
//   request.post(api + "/json_rpc", {json: params}, function (error, response, body) {
//     if (error) callback(400, error); else callback(200, body);
//   });
// }

// detail_tx_information
function get_pool_txs_details(ids, callback) {
    axios({
        method: 'post',
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
            log('POST get_pool_txs_details failed');
            callback(400, error);
        });

}


function get_info(callback) {
    axios({
        method: 'post',
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
            log('POST getinfo failed');
            callback(400, error);
        });

}


function get_tx_details(tx_hash, callback) {
    axios({
        method: 'post',
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
            log('POST get_tx_details failed');
            callback(400, error);
        });
}

function get_out_info(amount, i, callback) {
    axios({
        method: 'post',
        url: api,
        data: {
            method: 'get_out_info',
            params: {'amount': amount, 'i': i},
        },
        transformResponse: [data => JSONbig.parse(data)]
    })
        .then(function (response) {
            callback(200, response.data);
        })
        .catch(function (error) {
            log('POST get_out_info failed');
            callback(400, error);
        });
}


http.createServer(function (req, res) {
    log('request: ' + req.url);


    // var auth = req.headers['authorization'];
    // console.log("Authorization Header is: ", auth);
    // if (!auth) {
    //   res.statusCode = 401;
    //   res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
    //   res.end('<html><body>Need authorization</body></html>');
    // } else if (auth) {
    //   var tmp = auth.split(' ');
    //   var buf = new Buffer(tmp[1], 'base64');
    //   var plain_auth = buf.toString().split(':');
    //   var username = plain_auth[0];
    //   var password = plain_auth[1];
    //   if (username === "user" && password === "zano2019") {

    var headers = {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*"
    };
    var maxCount = 1000;

    if (req.url === '/get_blocks_details') {
        var body = [];
        req.on('data', function (chunk) {
            body.push(chunk);
        }).on('end', function () {
            if (!body.length) {
                res.writeHead(400, headers);
                res.end("Error. Need 'start' and 'count' params");
                return;
            }
            body = Buffer.concat(body).toString();
            var params_object = JSON.parse(body);

            if (params_object.start !== undefined && params_object.count !== undefined) {
                if (params_object.count > maxCount) {
                    params_object.count = maxCount;
                }
                db.serialize(function () {
                    db.all("SELECT blocks.* FROM blocks " +
                        "WHERE blocks.height >= ? " +
                        "ORDER BY blocks.height ASC " +
                        "LIMIT ?;", [params_object.start, params_object.count], function (err, rows) {
                        res.writeHead(200, headers);
                        res.end(JSON.stringify(rows));
                    });
                });
            } else {
                res.writeHead(400, headers);
                res.end("Error. Need 'start' and 'count' params");
            }
        });

    } else if (req.url === '/get_main_block_details') {
        var body = [];
        req.on('data', function (chunk) {
            body.push(chunk);
        }).on('end', function () {
            if (!body.length) {
                res.writeHead(400, headers);
                res.end("Error. Need 'id' param");
                return;
            }
            body = Buffer.concat(body).toString();
            var params_object = JSON.parse(body);
            if (params_object.id) {
                db.serialize(function () {
                    db.get("SELECT b2.id as next_id, b1.* FROM blocks as b1 left join blocks as b2 on b2.height > b1.height WHERE b1.id == ? ORDER BY b2.height ASC LIMIT 1;", [params_object.id], function (err, row) {
                        if (row) {
                            db.all("SELECT * FROM transactions WHERE keeper_block == ? ;", [row.height], function (err2, rows2) {
                                res.writeHead(200, headers);
                                for (var i = 0; i < rows2.length; i++) {
                                    rows2[i].extra = JSON.parse(rows2[i].extra);
                                    rows2[i].ins = JSONbig(rows2[i].ins);
                                    rows2[i].outs = JSONbig(rows2[i].outs);
                                    rows2[i].attachments = JSON.parse(rows2[i].attachments);
                                }
                                row.transactions_details = rows2;
                                res.end(JSON.stringify(row));
                            });
                        } else {
                            res.writeHead(400, headers);
                            res.end(JSON.stringify("block not found"));
                        }
                    });
                });
            } else {
                res.writeHead(400, headers);
                res.end("Error. Need 'id' param");
            }
        });

    } else if (req.url === '/get_alt_blocks_details') {
        var body = [];
        req.on('data', function (chunk) {
            body.push(chunk);
        }).on('end', function () {
            if (!body.length) {
                res.writeHead(400, headers);
                res.end("Error. Need 'offset' and 'count' params");
                return;
            }
            body = Buffer.concat(body).toString();
            var params_object = JSON.parse(body);

            if (params_object.offset !== undefined && params_object.count !== undefined) {
                if (params_object.count > maxCount) {
                    params_object.count = maxCount;
                }
                db.all("SELECT * FROM alt_blocks ORDER BY height DESC limit ? offset ?", [params_object.count, params_object.offset], function (err, rows) {
                    res.writeHead(200, headers);
                    res.end(JSON.stringify(rows));
                });
            } else {
                res.writeHead(400, headers);
                res.end("Error. Need 'offset' and 'count' params");
            }
        });

    } else if (req.url === '/get_alt_block_details') {
        var body = [];
        req.on('data', function (chunk) {
            body.push(chunk);
        }).on('end', function () {
            if (!body.length) {
                res.writeHead(400, headers);
                res.end("Error. Need 'id' param");
                return;
            }
            body = Buffer.concat(body).toString();
            var params_object = JSON.parse(body);

            if (params_object.id) {
                db.get("SELECT * FROM alt_blocks WHERE hash == ? ;", [params_object.id], function (err, row) {
                    res.writeHead(200, headers);
                    res.end(JSON.stringify(row));
                });
            } else {
                res.writeHead(400, headers);
                res.end("Error. Need 'id' param");
            }
        });
    } else if (req.url === '/get_info') {
        res.writeHead(200, headers);
        blockInfo.lastBlock = lastBlock.height;
        res.end(JSON.stringify(blockInfo));
    } else if (req.url === '/get_tx_details') {
        var body = [];
        req.on('data', function (chunk) {
            body.push(chunk);
        }).on('end', function () {
            if (!body.length) {
                res.writeHead(400, headers);
                res.end("Error. Need 'tx_hash' param");
                return;
            }
            body = Buffer.concat(body).toString();
            var params_object = JSON.parse(body);

            if (params_object.tx_hash) {
                db.serialize(function () {
                    db.all("SELECT transactions.*, blocks.id as block_hash, blocks.timestamp as block_timestamp FROM transactions LEFT JOIN blocks ON transactions.keeper_block = blocks.height WHERE transactions.id == ? ;", [params_object.tx_hash], function (err, row) {
                        if (row.length) {
                            res.writeHead(200, headers);
                            res.end(JSON.stringify(row[0]));
                        } else {
                            get_tx_details(params_object.tx_hash, function (code, data) {
                                if (code === 200) {
                                    res.writeHead(200, headers);
                                    if (data.result !== undefined) {
                                        res.end(JSON.stringify(data.result.tx_info));
                                    } else {
                                        res.writeHead(400, headers);
                                        res.end("Error. Need 'tx_hash' param");
                                    }
                                } else {
                                    res.writeHead(400, headers);
                                    res.end("Error. Need 'tx_hash' param");
                                }
                            });
                        }
                    });
                });
            } else {
                res.writeHead(400, headers);
                res.end("Error. Need 'tx_hash' param");
            }
        });

    } else if (req.url === '/search_by_id') {
        var body = [];
        req.on('data', function (chunk) {
            body.push(chunk);
        }).on('end', function () {
            if (!body.length) {
                res.writeHead(400, headers);
                res.end("Error. Need 'id' param");
                return;
            }
            body = Buffer.concat(body).toString();
            var params_object = JSON.parse(body);

            if (params_object.id) {
                db.get("SELECT * FROM blocks WHERE id == ? ;", [params_object.id], function (err, row) {
                    if (row === undefined) {
                        db.get("SELECT * FROM alt_blocks WHERE hash == ? ;", [params_object.id], function (err, row) {
                            if (row === undefined) {
                                db.get("SELECT * FROM transactions WHERE id == ? ;", [params_object.id], function (err, row) {
                                    if (row === undefined) {
                                        get_tx_details(params_object.id, function (code, data) {
                                            if (code === 200) {
                                                if (data.result) {
                                                    res.writeHead(200, headers);
                                                    res.end(JSON.stringify({result: "tx"}));
                                                } else {
                                                    res.writeHead(200, headers);
                                                    res.end(JSON.stringify({result: "NOT FOUND"}));
                                                }
                                            } else {
                                                res.writeHead(200, headers);
                                                res.end(JSON.stringify({result: "NOT FOUND"}));
                                            }
                                        });
                                    } else {
                                        res.writeHead(200, headers);
                                        res.end(JSON.stringify({result: "tx"}));
                                    }
                                });
                            } else {
                                res.writeHead(200, headers);
                                res.end(JSON.stringify({result: "alt_block"}));
                            }
                        });
                    } else {
                        res.writeHead(200, headers);
                        res.end(JSON.stringify({result: "block"}));
                    }
                });
            } else {
                res.writeHead(400, headers);
                res.end("Error. Need 'id' param");
            }
        });

    } else if (req.url === '/get_out_info') {
        var body = [];
        req.on('data', function (chunk) {
            body.push(chunk);
        }).on('end', function () {
            if (!body.length) {
                res.writeHead(400, headers);
                res.end("Error. Need 'amount' and 'i' param");
                return;
            }
            body = Buffer.concat(body).toString();
            var params_object = JSON.parse(body);

            if (params_object.amount !== undefined && params_object.i !== undefined) {
                db.get("SELECT * FROM out_info WHERE amount = ? AND i = ?", [params_object.amount, params_object.i], function (err, row) {
                    res.writeHead(200, headers);
                    if (row === undefined) {
                        get_out_info(params_object.amount, params_object.i, function (code, data) {
                            res.writeHead(code, headers);
                            res.end(JSON.stringify({tx_id: data.result.tx_id}));
                        });
                    } else {
                        res.end(JSON.stringify(row));
                    }
                });
            } else {
                res.writeHead(400, headers);
                res.end("Error. Need 'amount' and 'i' param");
            }
        });
    } else if (req.url === '/get_api') {
        if (api) {
            res.writeHead(200, headers);
            res.end(JSON.stringify({result: api.replace("http://", "")}));
        } else {
            res.writeHead(400, headers);
            res.end("api link not found");
        }
    } else if (req.url === '/get_tx_pool_details') {
        var body = [];
        req.on('data', function (chunk) {
            body.push(chunk);
        }).on('end', function () {
            if (!body.length) {
                res.writeHead(400, headers);
                res.end("Error. Need 'count' params");
                return;
            }
            body = Buffer.concat(body).toString();
            var params_object = JSON.parse(body);

            if (params_object.count !== undefined) {
                db.serialize(function () {
                    db.all("SELECT * FROM pool ORDER BY timestamp DESC limit ?", [params_object.count], function (err, rows) {
                        res.writeHead(200, headers);
                        res.end(JSON.stringify(rows));
                    });
                });
            } else {
                res.writeHead(400, headers);
                res.end("Error. Need 'count' params");
            }
        });
    } else if (req.url === '/get_aliases') {
        var body = [];
        req.on('data', function (chunk) {
            body.push(chunk);
        }).on('end', function () {
            if (!body.length) {
                res.writeHead(400, headers);
                res.end("Error. Need 'offset' and 'count' params");
                return;
            }
            body = Buffer.concat(body).toString();
            var params_object = JSON.parse(body);

            if (params_object.offset !== undefined && params_object.count !== undefined) {
                if (params_object.count > maxCount) {
                    params_object.count = maxCount;
                }
                var where = '';
                if (params_object.search !== undefined && params_object.search.length) {
                    where += " AND (alias LIKE '%" + params_object.search + "%' OR address LIKE '%" + params_object.search + "%' OR comment LIKE '%" + params_object.search + "%') ";
                }
                db.serialize(function () {
                    db.all("SELECT * FROM aliases WHERE enabled == 1 " + where + " ORDER BY block DESC limit ? offset ?", [params_object.count, params_object.offset], function (err, rows) {
                        res.writeHead(200, headers);
                        res.end(JSON.stringify(rows));
                    });
                });
            } else {
                res.writeHead(400, headers);
                res.end("Error. Need 'offset' and 'count' params");
            }
        });
    } else if (req.url === '/get_chart') {
        var body = [];
        req.on('data', function (chunk) {
            body.push(chunk);
        }).on('end', function () {
            if (!body.length) {
                res.writeHead(400, headers);
                res.end("Error. Need chart");
                return;
            }
            body = Buffer.concat(body).toString();
            var params_object = JSON.parse(body);
            if (params_object.chart !== undefined) {
                let period = Math.round(new Date().getTime() / 1000) - (24 * 3600);
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
                if (params_object.chart === 'all') {
                    const arrayAll = [];
                    db.serialize(function () {
                        db.all("SELECT " +
                            "actual_timestamp, " +
                            "block_cumulative_size, " +
                            "tr_count, " +
                            "difficulty, " +
                            "(SELECT difficulty / 120) as difficulty120, " +
                            "cumulative_diff_precise " +
                            "FROM blocks WHERE type=1 AND actual_timestamp > " + period, function (err, arrayAll) {
                            res.writeHead(200, headers);
                            if (err) {
                                res.end(JSON.stringify(err));
                            } else {
                                db.all("SELECT actual_timestamp, SUM(tr_count) as sum_tr_count FROM blocks GROUP BY strftime('%Y-%m-%d', datetime(actual_timestamp, 'unixepoch')) ORDER BY actual_timestamp;", function(err, rows0) {
                                  res.writeHead(200, headers);
                                  if (err) {
                                    res.end(JSON.stringify(err));
                                  } else {
                                    arrayAll[0] = rows0;
                                    res.end(JSON.stringify(arrayAll));
                                  }
                                });
                            }
                        });
                    });
                } else if (params_object.chart === 'AvgBlockSize') {
                    db.serialize(function () {
                        db.all("SELECT actual_timestamp, block_cumulative_size FROM blocks", function (err, rows) {
                            res.writeHead(200, headers);
                            if (err) {
                                res.end(JSON.stringify(err));
                            } else {
                                res.end(JSON.stringify(rows));
                            }
                        });
                    });
                } else if (params_object.chart === 'AvgTransPerBlock') {
                    db.serialize(function () {
                        db.all("SELECT actual_timestamp, tr_count FROM blocks", function (err, rows) {
                            res.writeHead(200, headers);
                            if (err) {
                                res.end(JSON.stringify(err));
                            } else {
                                res.end(JSON.stringify(rows));
                            }
                        });
                    });
                } else if (params_object.chart === 'hashRate') {
                    db.serialize(function () {
                        db.all("SELECT actual_timestamp, difficulty / 120 as difficulty, cumulative_diff_precise FROM blocks WHERE type=1", function (err, rows) {
                            res.writeHead(200, headers);
                            if (err) {
                                res.end(JSON.stringify(err));
                            } else {
                                for (let i = 0; i < rows.length; i++) {
                                    rows[i]['hashrate100'] = (i > 99) ? ((rows[i]['cumulative_diff_precise'] - rows[i - 100]['cumulative_diff_precise']) / (rows[i]['actual_timestamp'] - rows[i - 100]['actual_timestamp'])) : 0;
                                    rows[i]['hashrate400'] = (i > 399) ? ((rows[i]['cumulative_diff_precise'] - rows[i - 400]['cumulative_diff_precise']) / (rows[i]['actual_timestamp'] - rows[i - 400]['actual_timestamp'])) : 0;
                                }
                                res.end(JSON.stringify(rows));
                            }
                        });
                    });
                } else if (params_object.chart === 'difficulty') {
                    db.serialize(function () {
                        db.all("SELECT actual_timestamp, difficulty, type FROM blocks", function (err, rows) {
                            res.writeHead(200, headers);
                            if (err) {
                                res.end(JSON.stringify(err));
                                console.log(err);
                            } else {
                                const sorted = {};
                                const array = [];
                                for (let i = 0; i < rows.length; i++){
                                    if ( sorted[rows[i]['type']] === undefined ){
                                        sorted[rows[i]['type']] = [];
                                    }
                                    sorted[rows[i].type].push(rows[i]);

                                    array[0] = sorted[0];
                                    array[1] = sorted[1];
                                }
                                res.end(JSON.stringify(array));
                            }
                        });
                    });
                } else if (params_object.chart === 'ConfirmTransactPerDay') {
                    db.serialize(function () {
                        db.all("SELECT actual_timestamp, SUM(tr_count) as tr_count FROM blocks GROUP BY strftime('%Y-%m-%d', datetime(actual_timestamp, 'unixepoch')) ORDER BY actual_timestamp;", function (err, rows) {
                            res.writeHead(200, headers);
                            if (err) {
                                res.end(JSON.stringify(err));
                            } else {
                                res.end(JSON.stringify(rows));
                            }
                        });
                    });
                }
            } else {
                res.writeHead(400, headers);
                res.end("Error. Need chart params");
            }
        });
    } else {
        file.serve(req, res, function (e) {
            if (e && (e.status === 404)) {
                file.serveFile('/index.html', 200, {}, req, res);
            }
        });
    }


    //   } else {
    //     res.statusCode = 401;
    //     res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
    //     res.end('<html><body>Password not correct</body></html>');
    //   }
    // }


}).listen(parseInt(front_port));


var lastBlock = {
    height: -1,
    id: "0000000000000000000000000000000000000000000000000000000000000000"
};
var now_blocks_sync = false;
var now_pool_sync = false;
var blockInfo = {};
var now_delete_offers = false;

// aliases
var countAliasesDB;
var countAliasesServer;

// alt_blocks
var countAltBlocksDB = 0;
var countAltBlocksServer;

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


    db.get("SELECT * FROM blocks WHERE height=(SELECT MAX(height) FROM blocks)", [], function (err, row) {
        if (err) log(err);
        if (row) {
            lastBlock = row;
        }
        db.get("SELECT COUNT(*) AS alias FROM aliases", function (err, row) {
            if (err) log(err);
            if (row) {
                countAliasesDB = row.alias;
            }
            db.get("SELECT COUNT(*) AS height FROM alt_blocks", function (err, row) {
                if (err) log(err);
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

function log(msg) {
    var t = new Date();
    console.log(t.getFullYear() + "-" + t.getMonth() + "-" + t.getDate() + " " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + "." + t.getMilliseconds() + " " + msg);
}

var block_array = [];
var pools_array = [];

var serverTimeout = 30;

function syncPool() {
    get_all_pool_tx_list(function (code, data) {
        if (code === 200) {

            if (data.result) {
                pools_array = (data.result.ids) ? data.result.ids : [];
                db.serialize(function () {
                    db.run("DELETE FROM pool WHERE id NOT IN ( '" + pools_array.join("','") + "' );");
                });

                db.all("SELECT id FROM pool", function (err, rows) {
                    if (err) log(err);
                    var new_ids = [];
                    for (var j = 0; j < pools_array.length; j++) {
                        var find = false;
                        for (var i = 0; i < rows.length; i++) {
                            if (pools_array[j] === rows[i].id) {
                                find = true;
                                break;
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
                                                data.result.txs[x].fee.toString(),
                                                data.result.txs[x].id,
                                                data.result.txs[x].timestamp
                                            );
                                        }
                                        stmt.finalize();
                                        db.run("commit");
                                        now_pool_sync = false;
                                    });

                                }
                            } else {
                                now_pool_sync = false;
                            }
                        });
                    } else {
                        now_pool_sync = false;
                    }

                });

            }
        } else {
            now_pool_sync = false;
        }
    });
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
    db.run("DELETE FROM alt_blocks");

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
                    var pow_seed = data.result.blocks[x].pow_seed;
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
                });
            });
        }
    });
}

function getInfoTimer() {
    if (now_delete_offers === false) {
        get_info(function (code, body) {
            if (code === 200) {
                blockInfo = body.result;
                countAliasesServer = blockInfo.alias_count;
                countAltBlocksServer = blockInfo.alt_blocks_count;

                if (now_pool_sync === false) {
                    now_pool_sync = true;
                    syncPool();
                }

                if (countAltBlocksServer !== countAltBlocksDB) {
                    log("need update alt-blocks db=" + countAltBlocksDB + ' server=' + countAltBlocksServer);
                    syncAltBlocks();
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
