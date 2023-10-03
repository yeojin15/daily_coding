let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0])
let count = 0;  // 그룹 단어의 개수

for(let i=1; i<=n; ++i){
    let word = input[i];
    let isGroupWord = true;
    let checked = [];
    
    for(let j=0; j<word.length; ++j){
        if(checked.indexOf(word[j]) === -1){ //처음나온 글자라면 추가
            checked.push(word[j])
        }else{
            if(word[j-1] !== word[j]){
                isGroupWord = false;
                break;
            }
        }
    }
    if(isGroupWord){
        count++
    }
}
console.log(count)



