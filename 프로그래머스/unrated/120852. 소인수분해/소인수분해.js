function solution(n) {
    var answer = [];
    
    for(let i =2 ; i<=n ; i++) {
        
        while( n % i === 0) {
            answer.push(i);
            n = n / i;
        }
        
    }
    
    return [...new Set(answer)];
}