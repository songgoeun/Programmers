function solution(picture, k) {
    let result = [];
    for(let i = 0; i<=picture.length - 1; i++) {
        const arrayStr = [...picture];
        let temp = '';
        [...picture[i]].map((list) => {
            temp += list.repeat(k);
        });
        
        for(let j=0; j<k; j++) {
            result.push(temp);
        }
    }
    
    return result;
    
}