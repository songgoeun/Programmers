function solution(my_strings, parts) {
    let answer = '';
    parts.map(([s, e], index) => {
        answer += my_strings[index].split("").slice(s, e + 1).join("");
    })
    
    return answer;
}