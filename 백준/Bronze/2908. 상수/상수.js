let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let a = input[0].split(' ')[0].split('').reverse().join('')
let b = input[0].split(' ')[1].split('').reverse().join('')

console.log(Math.max( Number(a),Number(b) ))