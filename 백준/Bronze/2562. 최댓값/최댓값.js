let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input.map(i => Number(i));
let max = Math.max(...data)

console.log(max);
console.log(data.indexOf(max)+1)