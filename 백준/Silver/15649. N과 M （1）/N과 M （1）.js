let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);

let visited = new Array(N).fill(false); // 방문 처리 배열
let pool = []; // 순열에 포함된 원소
let answer = "";

function dfs(deps){
    if(deps === M){
      answer += pool.join(' ') + '\n';
      return;
    }
    for(let i = 0; i < N; i++){
        if(!visited[i]){ // (중복을 허용하지 않으므로) 처리 되지 않은 원소만 체크
            visited[i] = true; // 현재 원소 방문 처리
            pool.push(i + 1); // 현재 원소 선택
            dfs(deps + 1); // 재귀 함수 호출
            pool.pop(); // 현재 원소 선택 취소
            visited[i] = false; // 현재 원소 방문 처리 취소
        }
    }
}
dfs(0);
console.log(answer);