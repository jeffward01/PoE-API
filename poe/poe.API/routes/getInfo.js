module.exports = function (app) {
    var multichain = require("multichain-node")({
        port: "6448",
        host: "45.63.60.176",
        user: "multichainrpc",
        pass: "9U4honDBwaFdSaF66Qhn8xp2xeMDdcmxfeagUmqWeiVQ"
    });

    app.get('/getInfo/', function (req, res) {
        multichain.getInfo((err, info) => {
            if (err) {
                console.log("Error!");
                throw err;
            }
            return res.send(200, info);
        });
    });

    app.get('/getTransactionInfo/:txId', function (req, resp) {
        var txToCheck = req.params.txId;

        if ((txToCheck == undefined)) {
            return resp.send(400, "Please insert a txId to check");
        } else {
            multichain.getRawTransaction({ txid: txToCheck },
                (err, tx) => {
                    multichain.decodeRawTransaction({ "hexstring": tx },
                        (err, dTx) => {
                            if (err) {
                                console.log("Error!");
                                throw err;
                            }
                            console.log(dTx);
                            return resp.send(200, dTx);
                        });
                });
        }
    });
}