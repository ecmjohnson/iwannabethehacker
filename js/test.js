submit_code()

function submit_code(lang)
{
    console.log("calling submit_code");
    lang = lang || "python2";

    var request = require('request');

    // var text = document.getElementById("codeTextArea").value;
    var text = "print('hello')"

    var program = {
        script : text,
        language: lang,
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
        // check for error
        if (error || response.statusCode >= 400) {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
        } else {
            console.log('body:', body);
            console.log('program output: ', body.output)
        }
    });
}