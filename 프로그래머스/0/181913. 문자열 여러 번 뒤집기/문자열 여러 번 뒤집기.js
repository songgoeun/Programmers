function solution(my_string, queries) {
    let answer = my_string.split("");
    
    // for(let i=0; i<queries.length; i++) {
    //     const reverseString = answer.slice(queries[i][0], queries[i][1] + 1).reverse();
    //     let count = 0;
    //     reverseString.forEach((list) => {
    //         answer.splice(queries[i][0] + count, 1, list);  
    //         count++;
    //     });
    // }
    queries.forEach(([start, end]) => {
        const changeStr = answer.slice(start, end + 1);
        answer.splice(start, changeStr.length, ...changeStr.reverse());
    });
    return answer.join("");
}