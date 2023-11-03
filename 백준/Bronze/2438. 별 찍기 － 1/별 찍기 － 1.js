let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);
let star = '';
for (let i = 1; i <= num; i++){
    for (let j = 1; j <= i; j++){
        star += '*';
    }
    star += '\n'
}
console.log(star)