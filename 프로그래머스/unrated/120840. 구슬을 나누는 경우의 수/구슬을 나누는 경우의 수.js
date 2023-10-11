function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

function solution(balls, share) {
    if (balls === share) {
    return 1;
  } else {
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
  }
    // return Math.round(factorial(balls)/(factorial(balls - share)*factorial(share)));
    // let answer = 1;
    // let ballsCount = balls;
    // for(let i = 1; i <= balls - share; i++){
    //     answer = answer*ballsCount;
    //     ballsCount -= 1
    // }
    // return answer/factorial(balls - share);
}