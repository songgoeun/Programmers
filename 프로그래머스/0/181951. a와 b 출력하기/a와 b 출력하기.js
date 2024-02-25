// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = line.split(' ');
// }).on('close', function () {
//     //console.log("a = " + Number(input[0]) + "\nb = " + Number(input[1]));
//     console.log("a = " + Number(input[0]));
//     console.log("b = " + Number(input[1]));
// });
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").split(" ");
console.log("a = " + input[0]);
console.log("b = " + input[1]);