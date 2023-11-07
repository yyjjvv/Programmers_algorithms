let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  let age = Number(input[i].split(' ')[0]);
  let name = input[i].split(' ')[1];
  arr.push([age, name]);
}

arr.sort((a, b) => a[0] - b[0]);

answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += `${arr[i][0]} ${arr[i][1]}${'\n'}`
}
console.log(answer);