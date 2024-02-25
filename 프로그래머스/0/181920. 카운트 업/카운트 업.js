function solution(start_num, end_num) {
    let a = start_num;
    return Array.from({length: end_num - start_num + 1}, (x) => a++);
}