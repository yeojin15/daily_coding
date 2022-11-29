function solution(num) {
    // 짝수개수
    // num.length - 짝수개수 = 홀수개수
    // [짝수개수, 홀수개수]
    let even = 0;
    for(let i=0; i<num.length; i++){
        if(num[i]%2===0) even++
    }
    return [even, num.length-even]
}