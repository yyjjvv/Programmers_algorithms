function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

function solution(n) {
    let x = 1;
    while(factorial(x) <= n){
        x++
    }
    return x - 1
}