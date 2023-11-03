let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input.map(x => Number(x));
let max = Math.max(...arr)

console.log(max)
console.log(arr.indexOf(max) + 1)