let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, h] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let start = 1;
let end = Math.max(...arr);
let answer = 0;
while (start <= end){
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (let el of arr){
    if (el - mid >= 0) total += el - mid
  }
  if (total >= h) {
    answer = mid;
    start = mid + 1;
  }
  else end = mid - 1;
}
console.log(answer)