function solution(emergency) {
    // 원래 배열이랑 소팅된 배열이랑 비교해서 인덱스??
    let sorted = emergency.slice().sort((a,b)=>b-a) // 내림차순
    let answer = emergency.map((item)=>{return sorted.indexOf(item)+1})
    return answer
}