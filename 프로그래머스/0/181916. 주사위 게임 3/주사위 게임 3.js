function solution(a, b, c, d) {
    var answer = 0;
    const result = [a, b, c, d];
    const nums = new Set(result);
    const numsLength = nums.size;
    
    const calc = (size) => {
        let arr = [];
        nums.forEach((list) => {
            const count = result.filter((num) => num === list).length;
            if(count === size) {
                return;
            }
            
            arr.push(list);
        });
        
        return arr;
    }
    
    switch (numsLength) {
        case 1 : {
            return a * 1111;
        }            
        case 2 : {
            let resultArr = calc(3);
            let q = 0;
            let p = 0;
            if(resultArr.length === 1) {
                q = resultArr[0];
                p = [...nums].find((list) => list !== resultArr[0]);
                return (10 * p + q) ** 2;
            }

            q = Math.max(a,b,c,d);
            p = Math.min(a,b,c,d);
            return (p + q) * Math.abs(p - q);
        }
        case 3 : {
            const resultArr = calc(2);
            return resultArr[0] * resultArr[1];
        }            
        case 4 : {
             return result.reduce((a, b) => {
                return Math.min(a, b);
            });
        }
    }
}