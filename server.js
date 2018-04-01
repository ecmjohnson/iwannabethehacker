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
    // NOTE: this must be synchronized with definitions.js
    // The maximum length of valid stdout results (+1 for hackathon)
    var test_maxlen = [
        8,
        6,
        4
    ];
    var test_expected = [
        ['hello', 'Hello', 'HELLO', 'hello\n', 'Hello\n', 'HELLO\n'],
        ['15', '15\n'],
        ['9', '9\n']
    ];

    // Submit the code for evaluation and display the result
    var test_index = req.body.testindex;
    testing.submit_code(req.body.code, test_expected[test_index], function (result, output) {
        if (result) {
            return res.send(responses.success);
        } else {
            return res.send(responses.failure_part1 + output + responses.failure_part2);
        }
    }, req.body.language, test_maxlen[test_index]);
    return;
});

app.use(express.static(__dirname))
app.listen(8081, () => {console.log("Server is now running...")})