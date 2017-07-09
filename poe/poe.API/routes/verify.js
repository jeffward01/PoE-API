module.exports = function (app) {


    var multichain = require("multichain-node")({
        port: "6448",
        host: "45.63.60.176",
        user: "multichainrpc",
        pass: "9U4honDBwaFdSaF66Qhn8xp2xeMDdcmxfeagUmqWeiVQ"
    });

    //http://127.0.0.1:3000/testCtrl
    app.post('/verify/', function (req, res) {
        var signatureToPublish = req.body.signature;
        if (signatureToPublish == undefined) {
            return res.send(400, "Please insert a signature in the POST body to publish.");
        } else {
            return res.send(200, "Signature is: " + signatureToPublish);
        }

    });




}