function solution(str, letter) {
    let result = [];
    for(let i=0; i<str.length; i++){
        if(letter!==str[i]){
            result = result + str[i]
        }
    }
    return result;
}