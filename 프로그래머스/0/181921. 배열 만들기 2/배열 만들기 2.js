function solution(l, r) {
    let answer = [];
    for(let i=l; i<=r; i++) {
        let arr = i.toString().split("");
        let checkSet = new Set(arr);
        checkSet.delete('5');
        checkSet.delete('0');
        if(checkSet.size === 0) {
            answer.push(i);
        }
    }
    
    if(answer.length === 0) {
        return [-1];
    }
    
    return answer;
}