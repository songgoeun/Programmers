function solution(num_list) {
    let odd = '';
    let even = '';
    num_list.forEach((list) => {
        if(list % 2) {
            odd += list;
            return;
        }
        
        even += list;
    });
    
    return Number(even) + Number(odd);
}