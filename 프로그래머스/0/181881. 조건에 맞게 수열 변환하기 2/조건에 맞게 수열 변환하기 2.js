function solution(arr) {
    const calc = (listArr) => {
        let flag = true;
        const newArr = listArr.map((list, idx) => {
            let item = list;
            if(list >= 50 && list % 2 === 0) {
                item = list / 2;    
            }

            if(list < 50 && list % 2 !== 0) {
                item = list * 2 + 1;
            }

            if(item !== listArr[idx]) {
                flag = false;
            }
            
            return item;
        });
        
        if(flag) {
            return true;
        }
    
        arr = [...newArr];
    }
   
    
    let i = 0;
    while(1) {
        i++;
        const result = calc(arr);
        
        if(result) {
            return i - 1;
        }
    }
}