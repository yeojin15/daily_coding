function solution(cipher, code) {
    // 배열로 만들고, code * i 번째만 새로운 배열에 집어넣고 문자열로
    cipher=[...cipher]
    let answer=[]
    for(let i=1; i<=cipher.length; i++){
        answer.push(cipher[i*code-1])
    }
    return answer.join("")

}
