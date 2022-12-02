function solution(rsp) {
    // 가위2 바위0 보5
    let result = {2:0, 0:5, 5:2}
    return [...rsp].map(item => result[item]).join("")
}