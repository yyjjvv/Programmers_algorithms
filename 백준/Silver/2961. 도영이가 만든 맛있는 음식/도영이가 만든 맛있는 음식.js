let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, ...arr] = input;
n = Number(input[0]);
for (let i = 0; i < n; i++) {
  arr[i] = arr[i].split(' ').map(Number);
}
let visited = new Array(n).fill(false)
let result = []; // 조합 결과 배열
let answer = 1e9;

function dfs(start) {
  if (result.length >= 1) { // 현재 조합에 대하여 결과 계산
    let totalX = 1;
    let totalY = 0;
    for (let i of result) { // 인덱스(index)를 하나씩 확인하며
      let [x, y] = arr[i];
      totalX *= x;
      totalY += y;
    }
    answer = Math.min(answer, Math.abs(totalX - totalY));
  }
  for (let i = start; i < n; i++) { // 모든 조합 계산
    if (!visited[i]){
      visited[i] = true; // 방문 처리
      result.push(i);
      dfs(i + 1); // 재귀 함수 호출
      visited[i] = false; // 방문 처리 해제
      result.pop();
    }
  }
}
dfs(0);
console.log(answer);