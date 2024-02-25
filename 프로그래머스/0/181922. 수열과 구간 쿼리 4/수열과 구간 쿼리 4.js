function solution(arr, queries) {
    queries.forEach((list) => {
        const [s, e, k] = list;
        for(let i=s; i<=e; i++) {
            if(i % k === 0) {
                arr[i] = arr[i]+1;
            }
        }
    });
    return arr;
}