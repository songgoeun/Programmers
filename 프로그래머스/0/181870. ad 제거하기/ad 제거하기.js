function solution(strArr) {
    const result = [];
    strArr.forEach((list) => {
        if(!list.includes("ad")) {
            result.push(list);
        }
    });
    return result;
}