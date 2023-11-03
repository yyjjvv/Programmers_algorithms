let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);
let answer = '';

for (let i = 1; i <= testCase; i++) {
  let [num1, num2] = input[i].split(' ').map(Number);
  answer += num1 + num2 + '\n';
}
console.log(answer);