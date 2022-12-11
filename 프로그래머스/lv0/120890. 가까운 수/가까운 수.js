function solution(array, n) {
  let abs = []
  array.map((item)=>{
    abs.push(Math.abs(item-n))  //[10-13(3), 11-13(2), 12-13(1)]
  })
  let min = Math.min(...abs) // 제일 작은 차(1)
  
  let answer = []
    for(let i=0; i<abs.length; i++){
        if(abs[i]===min) answer.push(array[i])
    }
    // return answer [1,3,5,10],2 로 했을 경우 [1,3]이 같이 나왔다! <-여기서최소값
    return Math.min(...answer)
    
}