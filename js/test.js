submit_code("test");

function submit_code(program_text)
{
    // // Fetch from a placeholder URL for testing
    // var test_url = 'https://api.jdoodle.com/execute';

    // // Request listener function
    // function reqListener() {
    //     var data = JSON.parse(this.responseText);
    //     console.log(data);
    //   }
      
    //   // Error function
    //   function reqError(err) {
    //     console.log('Fetch Error :-S', err);
    //   }
      
    //   // Make the request
    //   var oReq = new XMLHttpRequest({mozSystem: true});
    //   oReq.onload = reqListener;
    //   oReq.onerror = reqError;
    //   oReq.open('post', test_url, true);
    //   oReq.setRequestHeader("Content-type", "application/json");
    //   var data = JSON.stringify({
    //       "script" : "print('hello')",
    //       "language" : "python",
    //       "versionIndex" : "0",
    //       "clientId" : "8f618a541abc0980378440af84c904a6",
    //       "clientSecret" : "d75f203ec72e17920299fdbf06690017444dccb01704e469534ab06586543665"
    //   });
    //   oReq.send(data);

    var request = require('request');

    var program = {
        script : "print('hello')",
        language: "python",
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