let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0])
let arr = input[1].split('').map(Number)

console.log(arr.reduce((a,b)=>a+b))

