let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [hour, minute] = input[0].split(' ').map(Number);
let spentTime = Number(input[1]);
minute += spentTime;
if(minute >= 60){
    hour += parseInt(minute / 60);
    minute = minute % 60
    if(hour > 23) hour -= 24;
}
console.log(`${hour} ${minute}`)