function solution(number) {
    let sum = number.split("").reduce((a, b) => Number(a) + Number(b), 0);
    return sum % 9;
}