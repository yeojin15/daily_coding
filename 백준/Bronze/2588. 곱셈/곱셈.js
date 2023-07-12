let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let a = input[0];
let b = input[1];

b1 = b[2];// 1의자리
b2 = b[1];// 10의자리
b3 = b[0];
console.log(Number(a * b1))
console.log(Number(a * b2))
console.log(Number(a * b3))
console.log(Number(a * b))