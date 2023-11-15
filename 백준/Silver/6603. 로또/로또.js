let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function dfs(arr, depth, start) {
    if (depth === 6) { // 현재 조합에 대하여 결과 계산
      let result = []; // 조합(combination) 결과 저장 테이블
      for (let i of selected) result.push(arr[i]);
      for (let x of result) answer += x + " "; // 계산된 조합을 실질적으로 처리하는 부분
      answer += "\n";
      return;
    }
    for (let i = start; i < arr.length; i++) { // 모든 조합 계산
      if (!visited[i]){
        visited[i] = true; // 방문 처리
        selected.push(i);
        dfs(arr, depth + 1, i + 1); // 재귀 함수 호출
        visited[i] = false; // 방문 처리 해제
        selected.pop();
      }
    }

}
for(let i = 0; i < input.length; i++){
  let data = input[i].split(" ").map(Number);
  if (data[0] === 0) break; // 테스트 케이스 종료 조건
  else {
    let [n, ...arr] = data;
    visited = new Array(n).fill(false); // 각 원소 인덱스(index)별 방문 여부
    selected = []; // 현재 조합에 포함된 원소(element)의 인덱스
    answer = "";
    dfs(arr, 0, 0);
    console.log(answer);
  }
}