function solution(my_string) {
    let word = my_string.split("");
    let result = [];
    for(let i=0; i<word.length; i++){
        result.unshift(word[i])
    }
    return result.join("")
}