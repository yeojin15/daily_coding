function solution(age) {
    let str = 'abcdefghij';
    let ageArr = String(age).split("");
    let result = '';
    // ageArr = [2, 3]
    // str[ageArr]를 반환하기
    for(let i=0; i<ageArr.length; i++){
        result = result + str[ageArr[i]];
    }
    return result;
    
}