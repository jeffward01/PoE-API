module.exports = function (app) {
    var multichain = require("multichain-node")({
        port: "6448",
        host: "45.63.60.176",
        user: "multichainrpc",
        pass: "9U4honDBwaFdSaF66Qhn8xp2xeMDdcmxfeagUmqWeiVQ"
    });

    
    app.post('/publish/',
        function (req, resp) {
            var keyToPublish = req.body.key;
            var dataToPublish = req.body.data;
            var streamToPublish = req.body.stream;

            if ((keyToPublish == undefined) || (dataToPublish == undefined)) {
                return resp.send(400, "Please insert a data and key in the POST body to publish.");
                
            } else {
                
                var dataToadd = new Buffer(dataToPublish).toString("hex");
                multichain.publish({
                    stream: "poe",
                    key: "testKey-02",
                    data: dataToadd
                },
                    (err, res) => {
                        console.log(res);
                        return resp.status(200).send(res);
                    });
            }

       
        });

    app.get('/publish/', function (req, res) {
        multichain.getInfo((err, info) => {
            if (err) {
                console.log("Error!");
                throw err;
            }
            return res.send(200, info);
        });
    });
}