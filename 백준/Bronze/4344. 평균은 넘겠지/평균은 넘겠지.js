let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let caseCount = Number(input[0]); //[5,'70,70,80','...']

for(let i=1; i<=caseCount; ++i){
    let data = input[i].split(' ').map(Number);
    let n = data[0] //0번째요소는 데이터개수
    let sum = 0;
    for(let j=1; j<=n; ++j){
        sum += data[j]
    }
    let avg = sum/n;
    let student = 0;
    for(let j=1; j<=n; ++j){
        if(data[j] > avg) student++
    }
    console.log(`${(student/n*100).toFixed(3)}%`)
}
