let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input.map(Number);
let myset = new Set()

arr.forEach(i => myset.add(i%42));
console.log(myset.size)
