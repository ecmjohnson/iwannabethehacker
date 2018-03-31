function grab_code() {
    var s = document.getElementById("codeTextArea").value;
    console.log(s);
    alert(s);
    submit_code(s);
}

window.onload = function() {
    var languages = ["perl", "php", "go", "pascal", "vbn", "haskell", "objc", "fortran", "hack", "rust", "brainfuck", "lolcode"];
    var languagesReal = ["Perl", "PHP", "Go", "Pascal", "Visual Basic", "Haskell", "Objective-C", "Fortran", "Hack", "Rust", "Brainfuck", "lolcode"];
    var element = document.getElementById("language");
    var language = languages[Math.floor(Math.random()*languages.length)];
    element.innerHTML = languagesReal;
    element.value = language;

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