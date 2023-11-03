let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let num = input[0].split(' ');
let a = parseInt(num[0]);
let b = parseInt(num[1]);
console.log(a + b)