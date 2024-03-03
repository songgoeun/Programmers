function solution(my_string) {
    let answer = new Array(52).fill(0);
    [...my_string].forEach((char) => {
        if(char === char.toUpperCase()) {
            answer[char.charCodeAt() - 'A'.charCodeAt()]++; 
            return;
        } 
        
        answer[char.charCodeAt() - 'a'.charCodeAt() + 26]++;
        
    })
    
    return answer;
}