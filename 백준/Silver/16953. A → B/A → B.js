let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [startNum, finalNum] = input[0].split(' ').map(Number);
let flag = false;
let answer = 1;

while (startNum <= finalNum) {
    if (startNum === finalNum) {
        flag = true;
        break;
    }
    if (finalNum % 2 == 0) finalNum = parseInt(finalNum / 2);
    else if (finalNum % 10 == 1) finalNum = parseInt(finalNum / 10);
    else break;
    answer++;
}

if (flag) console.log(answer);
else console.log(-1);