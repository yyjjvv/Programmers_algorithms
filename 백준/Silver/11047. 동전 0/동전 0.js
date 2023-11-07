let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, price] = input[0].split(' ').map(Number);

let arr = [];
for (let i = 1; i <= n; i++ ){
  arr.push(Number(input[i]))
}

arr.sort((a, b) => b - a);

let answer = 0;
for (let i = 0; i < arr.length; i++){
  
    answer += parseInt(price/arr[i]);
    price %= arr[i];
  
}
console.log(answer)