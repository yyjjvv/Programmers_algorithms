let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number); // 도시의 크기(N)와 치킨집의 개수(M)
let chicken = []; // 전체 치킨집 위치 배열
let house = []; // 전체 집 위치 배열
for (let i = 1; i <= n; i++) { // 전체 도시 정보 입력받기
  let line = input[i].split(' ').map(Number); // 빈 칸(0), 집(1), 치킨집(2)
  for (let j = 0; j < n; j++) {
    if (line[j] == 1) house.push([i, j]); // 집(1)
    if (line[j] == 2) chicken.push([i, j]); // 치킨집(2)
  }
}
let visited = new Array(chicken.length).fill(false); // 각 치킨집 방문 여부
let selected = []; // 현재 조합에 포함된 원소(element)
let answer = 1e9;

function dfs (depth, start){
  if(depth === m){
    let sum = 0;
    for (let i = 0; i < house.length; i++){
      let temp = 1e9; // 가장 가까운 치킨 집을 찾기
      for (let j = 0; j < selected.length; j++){
        temp = Math.min(temp, Math.abs(house[i][0] - chicken[selected[j]][0]) + Math.abs(house[i][1] - chicken[selected[j]][1]))
      }
      sum += temp
    }
    answer = Math.min(answer, sum); // 최솟값 계산
    return;
  }
  for (let i = start; i < chicken.length; i++) {
    if(!visited[i]){
        visited[i] = true;
        selected.push(i);
        dfs(depth + 1, i + 1);
        selected.pop();
        visited[i] = false;
    }
  }
}
dfs(0, 0);
console.log(answer);