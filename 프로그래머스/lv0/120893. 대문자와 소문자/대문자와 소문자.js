function solution(my_string) {
    let upper = [...my_string.toUpperCase()]
    my_string=[...my_string]
    let answer = []
    for(let i=0; i<my_string.length; i++){
        if(my_string[i]===upper[i]){
            answer.push(my_string[i].toLowerCase())
        }else{
            answer.push(upper[i])
        }
    }
    return answer.join("")

}