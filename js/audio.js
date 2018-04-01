var tracks = [
    "flyinglotus",
    "moonhooch"
];
var track_index = Math.floor(Math.random()*tracks.length);
document.getElementById(tracks[track_index]).load();
document.getElementById(tracks[track_index]).play();
console.log("TEST");