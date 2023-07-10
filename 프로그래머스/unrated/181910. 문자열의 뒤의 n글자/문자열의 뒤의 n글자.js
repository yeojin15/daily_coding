function solution(my_string, n) {
    // reverse 개수세기 -> reverse
    // 길이 - n => 앞에서부터 제외
    let v = my_string.length - n
    let word='';
    for(let i=v; i<my_string.length; ++i){
        word+=my_string[i]
    }
    return word
    
}