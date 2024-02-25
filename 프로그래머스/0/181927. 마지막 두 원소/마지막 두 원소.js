function solution(num_list) {
    const last = num_list[num_list.length - 1];
    const second_last = num_list[num_list.length - 2];
    if(last > second_last) {
        num_list.splice(num_list.length, 0, last - second_last);
        return num_list;
    }
    
    num_list.splice(num_list.length, 0, last * 2);
    return num_list;
}