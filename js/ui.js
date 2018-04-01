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
        "Pascal",
        "VisualBasic",
        "ObjectiveC",
        "Fortran",
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

    // Start the timer based on the test index
    var mins = test_time[test_index];
    var seconds = 60;
    function tick() {
        var counter = document.getElementById("timer");
        var current_minutes = mins-1;
        seconds--;
        if (seconds == 0 && current_minutes == 0) {
            window.location.replace("fail.html");
        }
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            if(mins > 1){
                countdown(mins-1);           
            }
        }        
    }
    tick();
}