module.exports = {
    // text:        code to submit
    // expected:    expected output (string or array of strings)
    // callback:    function to call on evaluation complete func(bool, error_string)
    // lang:        language of code
    // maxlen:      maximum expected length of stdout
    submit_code: function(text, expected, callback, lang, maxlen)
    {
        var request = require('request');

        var program = {
            script : text,
            language: retrieve_language(lang),
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
            // Check for API call error
            if (error || response.statusCode >= 400) {
                console.log('error:', error);
                console.log('statusCode:', response && response.statusCode);
            } else {
                console.log('Code Execution Result:', body);
                // Catch no input return
                if (!body.output) {
                    callback(false, body.outpu);
                    return;
                }
                // Catch error codes (since they are longer than expected results)
                if (body.output.length > maxlen) {
                    callback(false, body.output);
                    return;
                }
                // Check that it contains the expected substring
                if (expected.constructor === Array) {
                    for (i = 0; i < expected.length; i++) {
                        if (body.output.includes(expected[i])) {
                            callback(true);
                            return;
                        }
                    }
                    callback(false, body.output);
                    return;
                } else {
                    if (body.output.includes(expected)) {
                        callback(true);
                        return;
                    } else {
                        callback(false, body.output);
                        return;
                    }
                }
            }
        });
    }
};

function retrieve_language(real_name)
{
    // NOTE: left side names *MUST* match the array in UI.js
    var languages = {
        Perl : "perl",
        PHP: "php",
        Go : "go",
        Pascal : "pascal",
        VisualBasic : "vbn",
        Haskell : "haskell",
        ObjectiveC : "objc",
        Fortran : "fortran",
        Hack : "hack",
        Rust : "rust",
        Brainfuck : "brainfuck",
        lolcode : "lolcode"
    };
    return languages[real_name];
}