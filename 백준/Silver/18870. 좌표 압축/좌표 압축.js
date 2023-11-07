let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let setArray = [...new Set(arr)];
setArray.sort((a, b) => a - b);

let myMap = new Map();
for (let i = 0; i < setArray.length; i++) {
  myMap.set(setArray[i], i);
}
answer = "";
for (el of arr) answer += myMap.get(el) + " ";
console.log(answer);