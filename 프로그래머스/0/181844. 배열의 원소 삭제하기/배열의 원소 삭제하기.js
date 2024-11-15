function solution(arr, delete_list) {
    return arr.filter((list) => !delete_list.includes(list));
}