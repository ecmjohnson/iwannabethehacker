var http = require('http');

require('./js/test.js')

var express = require('express');
var app = express();

app.post('/', function(req,res){
    res.send("html");
    console.log(req);
});

app.use(express.static(__dirname))
app.listen(8080, () => {console.log("Server is now running...")})