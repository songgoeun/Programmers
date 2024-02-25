function solution(a, b, c) {
    const result1 = a === b;
    const result2 = b === c;
    const result3 = a === c;
    
    // 셋다 같음
    const allSame = result1 && result2 && result3;
    if(allSame) {
        return (a+b+c) * pow(a,b,c,2) * pow(a,b,c,3);
    }
    
    // 셋다 다름
    const re1 = !result1 && !result2 && !result3;
    if(re1) {
        return a+b+c;
    }
    
    
    // 두개만 같음
    return (a+b+c) * pow(a,b,c,2);
}
    
const pow = (a,b,c,n) => {
    return Math.pow(a,n)+Math.pow(b,n)+Math.pow(c,n);
}
