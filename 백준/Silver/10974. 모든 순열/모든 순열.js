let fs = require('fs');
let N = Number(fs.readFileSync('/dev/stdin').toString().trim().split('\n'));

let visited = new Array(N).fill();
let pool = [];
let answer ='';

const recursive = (deps) => {
  if(deps === N){
    answer += pool.join(' ') + '\n';
    return;
  }
  for(let i = 0; i < N; i++){
    if(!visited[i]){
      visited[i] = true;
      pool.push(i + 1);
      recursive(deps + 1)
      visited[i] = false;
      pool.pop();
    }
  }
}
recursive(0)
console.log(answer)