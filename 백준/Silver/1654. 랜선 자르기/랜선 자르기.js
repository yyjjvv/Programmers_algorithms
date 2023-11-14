let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, min] = input[0].split(' ').map(Number);
let [_, ...arr] = input.map(Number);

let start = 1;
let end = Math.max(...arr);
let answer = 0;

while (start <= end){
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (let el of arr){
    if (el >= mid) total += parseInt(el / mid)
  }
  if (total >= min) {
    if(answer < mid) answer = mid;
    start = mid + 1;
  }
  else end = mid - 1;
}
console.log(answer)