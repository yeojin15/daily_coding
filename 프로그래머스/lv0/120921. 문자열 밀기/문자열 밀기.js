function solution(A, B) {
    let arr = B.split('')
    let result = 0;
    while(arr.join('')!==A){
        let char = arr[0];
        arr.shift()
        arr.push(char)
        result++
        if(result > B.length){
            result = -1
            break
        }
    }
    return result
}