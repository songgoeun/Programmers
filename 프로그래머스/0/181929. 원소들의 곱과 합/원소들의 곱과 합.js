function solution(num_list) {
    let sum = 0;
    let multiply = 1;
    num_list.forEach((acc, index) => {
        sum += acc;
        multiply *=  acc;
    });
    
    return multiply > Math.pow(sum,2) ? 0 : 1;
}