let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);

let answer = "";
let pool = []; // 순열에 포함된 원소

function dfs(start){
    if(pool.length === M){
      answer += pool.join(' ') + '\n';
      return;
    }
    for(let i = start; i < N; i++){ // start 지점부터 하나씩 원소 인덱스(index)를 확인
        pool.push(i + 1); // 현재 원소 선택
        dfs(i + 1); // 재귀 함수 호출
        pool.pop(); // 현재 원소 선택 취소
    }
}
dfs(0);
console.log(answer);