function solution(s) {
    // s='1 2 z 3' 
    // i=z -> (- i-1)
    s = s.split(" ")
    let array = s.map(item => item==='Z' ? 'Z' : parseInt(item))
    let sum = 0;
    for(let i=0; i<array.length; i++){
        if(array[i]!=='Z'){
            sum = sum + array[i]
        }else {
            sum = sum - array[i-1]
        }
    }
    return sum
}