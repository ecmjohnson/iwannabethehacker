submit_code("test");
alert("did a thing (please check console)");

function submit_code(program_text)
{
    var request = require('request');

    var program = {
        script : "",
        language: "php",
        versionIndex: "0",
        clientId: "YourClientID",
        clientSecret:"YourClientSecret"
    };
    request({
        url: 'https://api.jdoodle.com/execute',
        method: "POST",
        json: program
    },
    function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
    });
}