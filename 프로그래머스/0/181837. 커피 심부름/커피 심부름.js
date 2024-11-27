function solution(order) {
    const sum = order.reduce((acc, list) => {
        if(list.includes('americano')) {
            acc = acc + 4500;
            return acc;
        }
        
        if(list.includes('cafelatte')) {
            acc = acc + 5000;
            return acc;
        }
        
        acc = acc + 4500;
        return acc;
        
    }, 0);
    return sum;
}