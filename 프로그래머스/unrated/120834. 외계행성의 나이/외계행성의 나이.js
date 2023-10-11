function solution(age) {
    return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
    // const ageStr = String(age);
    // const alphabet = "abcdefghij";
    // var answer = "";
    // for (let i = 0; i < ageStr.length; i++) {
    //     answer += alphabet.charAt(Number(ageStr.charAt(i)));
    // }
    // return answer;
}