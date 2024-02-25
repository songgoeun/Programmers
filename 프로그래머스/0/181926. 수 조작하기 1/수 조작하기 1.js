const operation = {
    "w" : (n) => n + 1,
    "s" : (n) => n - 1,
    "d" : (n) => n + 10,
    "a" : (n) => n - 10,
}

function solution(n, control) {
    const arr = control.split("");
    let answer = n;
    
    arr.forEach((list) => {
        answer = operation[list](answer);
    });
    return answer;
}