let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);

let answer = "";
for(let i=0; i<n; ++i){
    for(let j=0; j<=i; ++j){
        answer += '*'
    }
    answer += '\n';
}
console.log(answer)