function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

function solution(balls, share) {
    if (balls === share) {
        return 1;
      } else {
        return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
      }
}