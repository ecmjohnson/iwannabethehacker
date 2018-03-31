submit_code("test");
alert("did a thing (please check console)");

function submit_code(program_text)
{
    // Fetch from a placeholder URL for testing
    var test_url = 'https://jsonplaceholder.typicode.com/posts/1';
    fetch(test_url)
    .then(
        function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
            return;
        }
        response.json().then(function(data) {
            console.log(data);
        });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });

}