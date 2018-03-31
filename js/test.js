submit_code("print('hello')");

function submit_code(program_text)
{
    var request = require('request');

    var program = {
        script : program_text,
        language: "python2",
        versionIndex: "0",
        clientId: "8f618a541abc0980378440af84c904a6",
        clientSecret:"d75f203ec72e17920299fdbf06690017444dccb01704e469534ab06586543665"
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