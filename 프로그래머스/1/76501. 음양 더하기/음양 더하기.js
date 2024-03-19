function solution(absolutes, signs) {
    var answer = 0;
    signs.forEach((list, i) =>{
        if(list) {
            answer += absolutes[i];
            return;
        }
        
        answer += -absolutes[i];
    })
    return answer;
}