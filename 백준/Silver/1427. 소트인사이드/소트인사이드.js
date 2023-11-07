let fs = require('fs');
let arr = fs.readFileSync('/dev/stdin').toString().trim().split('').map(Number);

arr.sort((a, b) => b - a)
console.log(arr.join(''))