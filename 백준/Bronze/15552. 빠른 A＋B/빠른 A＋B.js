let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let caseCount = Number(input[0]);
let answer = ""
for(let i=1; i<=caseCount; ++i){
    let [a,b]=input[i].split(" ").map(Number);
    answer += a + b +'\n';
}
console.log(answer)