function solution(ineq, eq, n, m) {
    const type = ineq+eq;
    
    let answer;
    switch(type) {
        case ">=" :
            answer = n >= m;
            break;
        case "<=" :
            answer = n <= m;
            break;
        case ">!" :
            answer = n > m;
            break;
        default:
            answer = n < m;
            break;
    }
    
    return answer ? 1 : 0;
}