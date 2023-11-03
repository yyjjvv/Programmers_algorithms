let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let numArr = input[0].split(' ');
let a = Number(numArr[0]);
let b = Number(numArr[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);