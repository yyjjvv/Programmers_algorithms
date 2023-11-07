let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let newArr = [];
for (let i = 1; i <= n; i++) {
    let el = input[i].split(' ').map(Number);
    newArr.push(el);
}

function compare (a, b) {
    if (a[0] != b[0]) return a[0] - b[0];
    else return a[1] - b[1];
}
newArr.sort(compare);
let answer = "";
for (let point of newArr) {
    answer += point[0] + " " + point[1] + "\n";
}
console.log(answer);