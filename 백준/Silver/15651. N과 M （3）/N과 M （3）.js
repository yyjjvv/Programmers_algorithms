let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);

let answer = "";
// let visited = new Array(N).fill(false); //방문 처리
let pool = []; // 순열에 포함된 원소

function dfs(){
    if(pool.length === M){
      answer += pool.join(' ') + '\n';
      return;
    }
    for(let i = 0; i < N; i++){
        pool.push(i + 1); // 현재 원소 선택
        dfs(i + 1); // 재귀 함수 호출
        pool.pop(); // 현재 원소 선택 취소
    }
}
dfs();
console.log(answer);