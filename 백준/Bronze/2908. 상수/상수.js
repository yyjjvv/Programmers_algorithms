let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [num1, num2] = input[0].split(' ')
let reversed1 = num1.split('').reverse().join('');
let reversed2 = num2.split('').reverse().join('');
console.log(Math.max(Number(reversed1), Number(reversed2)))