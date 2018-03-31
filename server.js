var http = require('http');

var express = require('express');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));

var testing = require('./js/test.js');
var responses = require('./js/responses.js');

app.post('/', function(req, res) {
    testing.submit_code(req.body.code, 'hello', function (result) {
        if (result) {
            res.send(responses.success);
        } else {
            res.send(responses.failure);
        }
    });
});

app.use(express.static(__dirname))
app.listen(8080, () => {console.log("Server is now running...")})