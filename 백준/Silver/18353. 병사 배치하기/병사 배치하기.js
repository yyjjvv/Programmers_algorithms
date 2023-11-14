let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function lowerBound(arr, target, start, end) {
    while (start < end) {
        let mid = parseInt((start + end) / 2);
        if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동하기
        else start = mid + 1;
    }
    return end;
}

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

arr.reverse()
let result = [0];

// 이진 탐색을 활용한 LIS 알고리즘 수행
for (let el of arr) {
  if (result[result.length - 1] < el) { // 마지막 원소보다 현재 원소 x가 크다면 가장 뒤에 넣기
    result.push(el);
  }
  else { // x 이하인 원소가 있다면, 가능한 왼쪽에 있는 원소와 x를 교체
    let idx = lowerBound(result, el, 0, result.length - 1);
    result[idx] = el;
  }
}
// 0 삭제
result.shift()
console.log(n - result.length)