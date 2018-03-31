var http = require('http');

var testing = require('./js/test.js');
console.log(typeof testing.submit_code);

var responses = require('./js/responses.js');
console.log(typeof responses.success);

var express = require('express');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));

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