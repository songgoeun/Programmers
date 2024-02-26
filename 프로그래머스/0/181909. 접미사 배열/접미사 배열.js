function solution(my_string) {
    const arr = my_string.split("").map((list, index) => {
        return my_string.slice(-index);
    }).sort();
    
    return arr;
}