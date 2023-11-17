let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let testCase = Number(input[0]);
let line = 1;

class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    enqueue(item) {
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }
    dequeue() {
        const item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item;
    }
    peek() {
        return this.items[this.headIndex];
    }
    getLength() {
        return this.tailIndex - this.headIndex;
    }
}

function bfs(x, graph, visited){ // 미방문(color: -1), 빨강(color: 0), 파랑(color: 1)
  queue = new Queue();
  queue.enqueue(x);
  visited[x] = 0; // 처음 노드는 빨간색으로 칠하기
  while (queue.getLength() != 0) {
    x = queue.dequeue();
    for (let y of graph[x]) {
      if (visited[y] === -1) {
        visited[y] = (visited[x] + 1) % 2; // 빨강 ↔ 파랑
        queue.enqueue(y);
      }
    }
  }
}

function isBipartite(graph, visited) {
  for (let x = 1; x < visited.length; x++) {
    for (let y of graph[x]) if (visited[x] === visited[y]) return false;
  }
  return true;
}

for (let i = 1; i <= testCase; i++) {
  let [v, e] = input[line].split(' ').map(Number);
  // 그래프 정보 입력받기
  let graph = [];
  for (let i = 1; i <= v; i++) graph[i] = [];
    for (let i = 1; i <= e; i++) {
      let [u, v] = input[line + i].split(' ').map(Number);
      graph[u].push([v]);
      graph[v].push([u]);
  }
  
  let visited = new Array(v + 1).fill(-1); // 방문 정보
  
  for (let i = 1; i <= v; i++) { // BFS를 이용해 색칠
    if (visited[i] == -1) bfs(i, graph, visited);
  }
  
  line += e + 1; // 다음 테스트 케이스로 이동
  
  if (isBipartite(graph, visited)) console.log("YES");
  else console.log("NO");
}