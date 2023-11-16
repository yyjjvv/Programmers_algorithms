let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


let N = Number(input[0]);
let sign = input[1].split(' ')
let arr = [];
let visited = new Array(10).fill(false);
let current = "";
let first = "";

function dfs() {
  if(arr.length === N + 1){
    let flag = true;
    for(let i = 0; i < N; i++){
      if(sign[i] === '<'){
        if (arr[i] > arr[i + 1]) flag = false;
      }
      else if(sign[i] === '>'){
        if (arr[i] < arr[i + 1]) flag = false;
      }
    }
    if(flag){
      current = "";
      for (let x of arr) current += x + "";
      if (first === "") first = current; // 첫째 문자열은 [가장 작은 수]
    }
    return;
  }
  
  for (let i = 0; i < 10; i++) { // 0부터 9까지의 숫자를 하나씩 고르는 순열(백트래킹)
    if (!visited[i]){
      visited[i] = true; // 현재 선택한 숫자 방문 처리
      arr.push(i);
      dfs(); // 재귀 함수 호출
      visited[i] = false; // 현재 선택한 숫자 방문 처리 취소
      arr.pop();
    }
  }
}
dfs();
console.log(current + "\n" + first); 