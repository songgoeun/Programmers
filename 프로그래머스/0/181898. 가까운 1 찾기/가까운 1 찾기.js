function solution(arr, idx) {
    const newArr = arr.slice(idx, arr.legnth);
    const index = newArr.indexOf(1);
    if(index !== -1) {
        return index + idx;
    }
    
    return index;
}