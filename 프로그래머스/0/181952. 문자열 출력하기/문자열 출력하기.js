// const fs = require("fs");
// const input = fs.readFileSync(0, "utf8").split("\n"); 
// console.log(input[0]);
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
    console.log(str);
});
