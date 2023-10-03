let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input[1].split(' ').map(Number); //[5,7,10,15,20]

let min = arr.reduce((a,b)=>Math.min(a,b))
let max = arr.reduce((a,b)=>Math.max(a,b))

console.log(min + ' ' + max)