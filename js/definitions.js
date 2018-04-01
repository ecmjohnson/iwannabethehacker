// HOW TO ADD OR REMOVE TESTS:
// 1. don't forget to update the number_of_tests
// 2. don't forget to update the definitions in server.js

var number_of_tests = 3;
var test_description = [
    'Print "hello"',
    'Sum the input comma-separated (e.g. 1,5,6) array',
    'Return the square of the provided number'
];
var test_input = [
    '',
    '1,4,10',
    '3'
];
// These are in minutes
var test_time = [
    1,
    4,
    3
];
// NOTE: this must be synchronized with server.js
// The maximum length of valid stdout results (+1 for hackathon)
var test_maxlen = [
    8,
    6,
    4
];
var test_expected = [
    ['hello', 'Hello', 'HELLO', 'hello\n', 'Hello\n', 'HELLO\n'],
    ['15', '15\n'],
    ['9', '9\n']
];