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
    console.log('Request in server:', req.body);
    testing.submit_code(req.body.code, ['hello', 'Hello', 'hello\n', 'Hello\n'], function (result, output) {
        if (result) {
            return res.send(responses.success);
        } else {
            return res.send(responses.failure_part1 + output + responses.failure_part2);
        }
    }, req.body.language, 8);
    return;
});

app.use(express.static(__dirname))
app.listen(8080, () => {console.log("Server is now running...")})