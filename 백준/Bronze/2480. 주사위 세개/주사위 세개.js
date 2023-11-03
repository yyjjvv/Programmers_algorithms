// 같은 숫자 x? 제일 큰 수 * 100
// 같은 숫자 2개? 1000 + 중복된 숫자 * 100
// 같은 숫자 3개? 10000 + 중복된 숫자 * 1000
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let num1 = Number(input[0].split(' ')[0]);
let num2 = Number(input[0].split(' ')[1]);
let num3 = Number(input[0].split(' ')[2]);
// 세 개의 수가 모두 같은 경우
if (num1 == num2 && num2 == num3) console.log(10000 + num1 * 1000);
// 세 개의 수가 전부 같지는 않지만, 두 개의 수가 같은 경우
else if (num1 == num2) console.log(1000 + num1 * 100);
else if (num1 == num3) console.log(1000 + num1 * 100);
else if (num2 == num3) console.log(1000 + num2 * 100);
// 세 개의 수가 전부 다른 경우
else console.log(Math.max(num1, num2, num3) * 100);