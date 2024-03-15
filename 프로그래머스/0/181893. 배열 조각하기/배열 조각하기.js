function solution(arr, query) {
    query.forEach((list, index) => {
        if(index % 2 === 0) {
            arr.splice(query[index] + 1, arr.length - query[index]);
            return;
        }
        
        arr.splice(0, query[index]);
    });
    return arr;
}