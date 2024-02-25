function solution(my_string, index_list) {
    let answer = '';
    index_list.forEach((list) => {
         answer += my_string[list];
    })
    
    return answer;
}