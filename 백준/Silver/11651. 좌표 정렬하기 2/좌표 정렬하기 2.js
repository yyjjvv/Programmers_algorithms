let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = input[0];
let newArr = [];

for(let i = 1; i <= n; i++){
  newArr.push(input[i].split(' ').map(Number));
}

newArr.sort((a, b) => {
  if (a[1] != b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0]
  }
})

let answer = '';
for(let i = 0; i < newArr.length; i++){
  answer += `${newArr[i][0]} ${newArr[i][1]}${'\n'}`;
}

console.log(answer)