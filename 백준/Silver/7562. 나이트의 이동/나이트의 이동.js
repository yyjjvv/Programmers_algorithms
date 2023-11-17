let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let testCase = Number(input[0]);
let line = 1;

dx = [-2, -2, -1, -1, 1, 1, 2, 2];
dy = [-1, 1, -2, 2, -2, 2, -1, 1];

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

for (let i = 1; i <= testCase; i++) {
  let I = Number(input[line]);
  let [x, y] = input[line + 1].split(' ').map(Number); // 현재 위치
  let [targetX, targetY] = input[line + 2].split(' ').map(Number); // 목표 위치
  
  let visited = []; // 방문 정보
  for (let i = 0; i < I; i++) visited.push(new Array(I).fill(0));
  
  let queue = new Queue();
  queue.enqueue([x, y]);
  visited[x][y] = 1; // 방문 처리
  
  while (queue.getLength() !== 0) { // 큐가 빌 때까지 반복
    let cur = queue.dequeue();
    x = cur[0]
    y = cur[1]
    for (let i = 0; i < 8; i++) { // 현재 위치에서 이동하고자 하는 위치 확인 (8가지 방향)
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= I || ny < 0 || ny >= I) continue; // 공간을 벗어난 경우 무시
      if (visited[nx][ny] === 0) { // 방문하지 않은 위치인 경우
        visited[nx][ny] = visited[x][y] + 1;
        queue.enqueue([nx, ny]);
      }
    }
  }
  line += 3;
  console.log(visited[targetX][targetY] - 1)
}