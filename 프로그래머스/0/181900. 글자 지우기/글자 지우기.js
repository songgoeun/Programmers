function solution(my_string, indices) {
    
    const answer = [...my_string].filter((list, index) => {
        return !indices.includes(index);
    }).join("");
    
    return answer;
}