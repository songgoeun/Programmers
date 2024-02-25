function solution(a, d, included) {
    let sum = 0;
    included.forEach((list, index) => {
        if(list) {
            sum += a + index * d;
        }
    })
    
    return sum;
}