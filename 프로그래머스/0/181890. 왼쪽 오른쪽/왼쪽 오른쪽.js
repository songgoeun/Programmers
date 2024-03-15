function solution(str_list) {
    // 그냥 for 문이 더 효율적일듯
    for(let i in str_list) {
        const idx = Number(i);
        if(str_list[i] === "l") {
            return str_list.splice(0, idx);
        }
        
        if(str_list[i] === "r") {
            return str_list.splice(idx + 1, str_list.length - idx - 1);
        }
    }
    
    return [];
}