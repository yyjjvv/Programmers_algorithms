let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
data = input[0].split(' ');
let a = parseInt(data[0]);
let b = parseInt(data[1]);
console.log(a * b);