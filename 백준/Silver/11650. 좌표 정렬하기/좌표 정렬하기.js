let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let newArr = [];
for (let i = 1; i <= n; i++) {
    let el = input[i].split(' ').map(Number);
    newArr.push(el);
}

function compare (a, b) {
    if (a[0] != b[0]) return a[0] - b[0]; // x 좌표 기준 오름차순
    else return a[1] - b[1]; // x가 같으면 y 좌표 기준 오름차순
}
newArr.sort(compare); // 정렬 수행
let answer = ""; // 정렬 결과 출력
for (let point of newArr) {
    answer += point[0] + " " + point[1] + "\n";
}
console.log(answer);