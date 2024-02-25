const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    for(let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
});

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf8").split("");

// console.log(input, input);
