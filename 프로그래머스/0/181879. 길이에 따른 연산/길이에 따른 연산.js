function solution(num_list) {
    var answer;
    if(num_list.length >= 11) {
        answer = num_list.reduce((arr, item) => {
            return arr + item;
        }, 0);
        return answer;
    }
    
    answer = num_list.reduce((arr, item) => {
        return arr * item;
    }, 1);
    return answer;
}