var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
app.post('handle', function(request,response){
    console.log(request.body);
});
app.use(express.static(__dirname))
app.listen(8080, () => {console.log("listening on port")})

require('./js/test.js')

// const PORT=8080;

// fs.readFile('./index.html', function (err, html) {

//     if (err) throw err;    

//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(PORT);
// });
