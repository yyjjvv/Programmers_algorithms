// 첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)
// 각 테스트 케이스는 반복 횟수 R(1 ≤ R ≤ 8)
// 문자열 S가 공백으로 구분. S의 길이는 적어도 1이며, 20글자를 넘지 않는다. 
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);
// 한 줄(line)씩 입력받기
for (let i = 1; i <= testCase; i++) {
let [r, s] = input[i].split(" ");
let result = "";
// 현재 문자열의 각 문자를 하나씩 확인하며
    for (let j = 0; j <= s.length; j++) {
// r번 반복한 문자열을 뒤에 이어붙이기
result += s.charAt(j).repeat(r); }
  console.log(result);
}