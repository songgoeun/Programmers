function solution(a, b) {
    const result1 = Number(`${a}${b}`);
    const result2 = Number(`${b}${a}`);
    
    return result1 >= result2 ? result1 : result2;
}