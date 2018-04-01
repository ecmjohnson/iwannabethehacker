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
        "Haskell",
        "ObjectiveC",
        "Fortran",
        "Hack",
        "Rust",
        "Brainfuck",
        "lolcode"
    ];
    var element = document.getElementById("language");
    var index = Math.floor(Math.random()*languages.length);
    element.value = languages[index];
    document.getElementById('codeTextArea').value = "/*" + element.value + " language code.*/";

    var seconds = 60;
    var mins = 1;
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