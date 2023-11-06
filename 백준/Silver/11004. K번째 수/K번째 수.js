let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let index = input[0].split(' ').map(Number)[1] - 1;
let arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
console.log(arr[index])