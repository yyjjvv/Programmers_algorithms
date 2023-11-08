let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let num = Number(input[0]);
let answer = 0;

while(num >= 0){
  if (num % 5 === 0) {
    answer += num / 5;
    break;
  }
  else {
    num -= 3;
    answer += 1;
    if(num === 0) break;
  }
  if(num < 0) {
    answer = -1;
    break;
  }
}
console.log(answer)