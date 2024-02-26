function solution(my_string, is_suffix) {
    // str.endsWith(suff) ? 1 : 0
    // endsWith - 어떤 문자열에서 특정 문자열로 끝나는지를 확인할 수 있으며, 그 결과를 true 혹은 false로 반환한다.
    const arr = my_string.split("").map((list, index) => {
        return my_string.slice(-index);
    }).sort();
    
    return arr.includes(is_suffix) ? 1 : 0;
}