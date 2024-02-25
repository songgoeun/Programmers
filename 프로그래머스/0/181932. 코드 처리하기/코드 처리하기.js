function solution(code) {
    let mode = 0;
    let ret = '';
    
    const code_arr = code.split("");
    
    code_arr.forEach((str, index) => {
        if(mode && str === "1") {
            mode = 0;
            return;            
        }
        
        if(!mode && str === "1") {
            mode = 1;
            return;
        }
        
         
        if(!mode && !(index % 2)) {
            ret += str;
            return;
        }
        
         if(mode && (index % 2)) {
            ret += str;
        }
    });
    
    return ret === "" ? "EMPTY" : ret;
}