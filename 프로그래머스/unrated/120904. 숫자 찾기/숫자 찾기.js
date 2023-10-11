function solution(num, k) {
    let answer = [...String(num)].indexOf(String(k));
    return answer >= 0 ? answer + 1 : answer;
}