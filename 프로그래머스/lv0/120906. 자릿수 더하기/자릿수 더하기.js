function solution(n) {
    n = String(n).split('')
    return n.map(n=>parseInt(n)).reduce((acc,cur)=>acc+cur)
}