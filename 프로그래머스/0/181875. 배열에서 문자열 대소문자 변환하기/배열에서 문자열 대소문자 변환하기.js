function solution(strArr) {
    return [...strArr].map((list, idx) => {
        if(idx % 2 === 0) {
            return list.toLowerCase();
        }
        return list.toUpperCase();
    });
}