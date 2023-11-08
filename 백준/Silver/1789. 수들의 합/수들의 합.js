let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let num = Number(input[0]);
let sum = 0;
let current = 0;

while(num >= sum){
  current += 1;
  sum += current;
}

console.log(current - 1)