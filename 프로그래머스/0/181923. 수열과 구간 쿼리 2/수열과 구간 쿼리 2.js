function solution(arr, queries) {
    
    let answer = [];
    queries.forEach((list, index) => {
        const a = arr.slice(list[0], list[1]+1);
        let result = [];
        a.forEach((num) => {
            if(num > list[2]) {
                result.push(num);
            }
        });
        
        
        const mins = result.length > 0 ? Math.min(...result) : -1;
        answer.push(mins);
    })
    
    return answer;
}