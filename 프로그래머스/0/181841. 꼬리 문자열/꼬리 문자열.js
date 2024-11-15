function solution(str_list, ex) {
    return str_list.filter((list) => !list.includes(ex)).join("");
}