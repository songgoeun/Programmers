function solution(num_list) {
    let odd = 0;
    let even = 0;
    num_list.forEach((list, index) => {
        if((index + 1) % 2) {
            even += list;
            return;
        }
        
        odd += list;
    })
    return odd > even ? odd : even;
}