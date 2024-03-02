function solution(q, r, code) {
    var answer = '';
    code.split("").forEach((list, index) => {
        if(index % q === r) {
            answer += list;
        }
    })
    return answer;
    
    // return [...code].filter((_, i) => i % q === r).join('');
}