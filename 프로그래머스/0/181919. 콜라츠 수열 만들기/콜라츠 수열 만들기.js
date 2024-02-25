function solution(n) {
    var answer = [n];
    function calc(n) {
        if(n === 1) {
            return;
        }
        
        
        if(n % 2 === 0) {
            answer.push(n / 2);
            return calc(n / 2);
        }
        
        answer.push( 3 * n + 1 );
        return calc( 3 * n + 1 );
    }
    
    calc(n);
    return answer;
}