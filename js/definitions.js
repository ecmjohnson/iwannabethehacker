var number_of_tests = 2;
var test_description = [
    'Print "hello"',
    'Sort the input comma-separated (e.g. 3,2,5) array; smallest first (e.g. 2,3,5)',
    'Sum the input comma-separated (e.g. 1,5,6) array',
    'Return the square of the provided number'
];
var test_input = [
    '',
    '5,1,10,25',
    '1,4,10',
    '3'
];
// These are in minutes
var test_time = [
    1,
    5,
    3,
    2
];
// NOTE: this must be synchronized with server.js
// The maximum length of valid stdout results (+1 for hackathon)
var test_maxlen = [
    8,
    12,
    6,
    4
];
var test_expected = [
    ['hello', 'Hello', 'hello\n', 'Hello\n'],
    ['1,5,10,25', '1 5 10 25', '1;5;10;25', '1,5,10,25\n', '1 5 10 25\n', '1;5;10;25\n'],
    ['15', '15\n'],
    ['9', '9\n']
];