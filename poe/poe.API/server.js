nodvar dotenv = require('dotenv').config();


var multichain = require("multichain-node")({
    port: "6448",
    host: "45.63.60.176",
    user: "multichainrpc",
    pass: "9U4honDBwaFdSaF66Qhn8xp2xeMDdcmxfeagUmqWeiVQ"
});

var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");



var app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

var routes = require('./routes')(app);



//Route Prefix:
//https://stackoverflow.com/questions/30966337/express-router-prefix
//var router = express.Router();
//router.use('/user', user);
//
//app.use('/api/v1', router);


var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});