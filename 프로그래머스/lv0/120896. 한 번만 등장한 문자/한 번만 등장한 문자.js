function solution(str) {
    let arr = str.split('')
    let obj = {}
    let result = []
    // 배열 돌면서 undefined 면 1 있으면 ++
    for(let i=0; i<str.length; i++){
        if(obj[str[i]]===undefined){
            obj[str[i]] = 1
        }else{
            obj[str[i]]++
        }
    }
    for(key in obj){
        if(obj[key]===1){
            result.push(key)
        }
    }
    return result.sort().join('')
    
}