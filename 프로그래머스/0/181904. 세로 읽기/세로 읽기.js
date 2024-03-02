function solution(my_string, m, c) {
    const arr = my_string.split("");
    let answer = '';
    for(let s = 0; s < arr.length; s+=m) {
        answer += arr.slice(s, s + m)[c-1];
    }
 
    return answer;
}