const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [length, num] = [...input];
let sum = num.split('').map(Number).reduce((a, b) => a+b)
console.log(sum)