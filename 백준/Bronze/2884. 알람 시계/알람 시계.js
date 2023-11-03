const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const time = input[0].split(' ');
let hour = Number(time[0]);
let minute = Number(time[1]);

if(minute >= 45) {
   minute -= 45
} else {
    hour -= 1
    minute += 15
    if(hour < 0) hour = 23
}
console.log(`${hour} ${minute}`);