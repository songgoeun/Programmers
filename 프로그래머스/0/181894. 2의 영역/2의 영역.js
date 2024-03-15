function solution(arr) {
    const firstIndex = arr.findIndex((list) => list === 2);
    let lastIndex = -1;
    arr.forEach((list, index) => {
        if(list === 2) {
            lastIndex = index;
        }
    });
    
    if(lastIndex === -1) {
        return [-1];
    }
    
    return arr.slice(firstIndex, lastIndex+1);
    //  const from = arr.indexOf(2);
    //  const end = arr.lastIndexOf(2);
}