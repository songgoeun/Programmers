// function solution(numLog) {
//     const convert = {
//         '1': 'w', 
//         '-1': 's',
//         '10': 'd',
//         '-10': 'a'
//     };

//     return numLog.slice(1).map((v, i) => {
//         return convert[v - numLog[i]]
//     }).join('')
// }


function solution(numLog) {
    const operation = {
        "1" : (n) => n + "w",
        "-1" : (n) => n + "s",
        "10" : (n) => n + "d",
        "-10" : (n) => n + "a",
    }
    
    let answer = '';
    
    for(let i=0; i<numLog.length; i++) {
        if(i+1 === numLog.length) {
            break;
        }
        const result = (numLog[i+1] - numLog[i]).toString();
        answer = operation[result](answer);
    }
    
    return answer;
}