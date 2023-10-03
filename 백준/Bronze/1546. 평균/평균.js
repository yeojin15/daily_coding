//자기 점수 중에 최댓값을 골랐다. 이 값을 M이라고 한다. 그리고 나서 모든 점수를 점수/M*100으로 고쳤다.
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0])
let arr = input[1].split(' ').map(Number);
let M = Math.max(...arr)

let newarr = arr.map(i => i/M*100)
let avg = newarr.reduce((a, b) => a + b) / n; 
console.log(avg)