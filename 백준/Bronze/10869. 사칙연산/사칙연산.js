let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let a = parseInt(input[0].split(" ")[0]);
let b = parseInt(input[0].split(" ")[1]);

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(Math.floor(a/b));
console.log(a%b);