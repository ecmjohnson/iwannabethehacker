var number_of_tests = 2;
var test_description = [
    'Print "hello"',
    'Sort the input comma-separated (e.g. 3,2,5) array, smallest first (e.g. 2,3,5)'
];
var test_input = [
    "",
    "5,1,10,25"
];
// These are in minutes
var test_time = [
    1,
    3
];
// NOTE: this must be synchronized with server.js
// The maximum length of valid stdout results
var test_maxlen = [
    8,
    12
]
var test_expected = [
    ['hello', 'Hello', 'hello\n', 'Hello\n'],
    ['1,5,10,25', '1 5 10 25', '1;5;10;25']
];