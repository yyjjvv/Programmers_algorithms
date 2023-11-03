let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let a = Number(input[0]);
let b = input[1].split('');
let multiplyFirstDigit = a * Number(b[2]);
let multiplySecondDigit = a * Number(b[1]);
let multiplyThirdDigit = a * Number(b[0]);
let result = multiplyFirstDigit + (multiplySecondDigit * 10) + (multiplyThirdDigit * 100);
console.log(multiplyFirstDigit)
console.log(multiplySecondDigit)
console.log(multiplyThirdDigit)
console.log(result)