var textAreaCleared = false;

function clearText() {    
    if (!textAreaCleared) {
        document.getElementById('codeTextArea').value = "";
        textAreaCleared = true;
    }
}

window.onload = function() {
    
    // NOTE: to add a language, you also need to update the mapping in test.js
    // The mapping is done in the retrieve_language function
    var languages = [
        "Perl",
        "PHP",
        "Go",
        "VisualBasic",
        "ObjectiveC",
        "Fortran",
        "BashShell",
        "Lua",
        "SmallTalk",
        "Rust",
        "Brainfuck",
        "lolcode"
    ];
    var element = document.getElementById("language");
    var index = Math.floor(Math.random()*languages.length);
    element.value = languages[index];
    document.getElementById('codeTextArea').value = "/*" + element.value + " language code.*/";

    // Generate the test number
    var test_index = Math.floor(Math.random() * number_of_tests);
    this.document.getElementById("testindex").value = test_index;
    var test_string = test_description[test_index];
    this.document.getElementById("description").innerHTML = test_string;

    var minutes = 60 * test_time[test_index],
            display = document.querySelector('#timer');
        startTimer(minutes, display);

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
            if (seconds == 0 && minutes == 0) {
               window.location.replace("legacy/fail.html");
           }
        }, 1000);
    }    
}

