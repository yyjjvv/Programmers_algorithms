let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, k] = input[0].split(' ').map(Number);
const MAX = 100001;
let visited = new Array(MAX).fill(0);

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

function bfs() { // 너비 우선 탐색(BFS)
  let queue = new Queue();
  queue.enqueue(n);
  while (queue.getLength() !== 0) { // 큐가 빌 때까지 반복
    let cur = queue.dequeue();
    if (cur === k) { // 동생의 위치에 도달한 경우
      return visited[cur]; // 최단 시간 출력
    }
    for (let nxt of [cur - 1, cur + 1, cur * 2]) {
      if (nxt < 0 || nxt >= MAX) continue; // 공간을 벗어난 경우 무시
      // 아직 방문하지 않은 위치라면
      if (visited[nxt] === 0) {
        visited[nxt] = visited[cur] + 1;
        queue.enqueue(nxt);
      } 
    }
  }
}
console.log(bfs());