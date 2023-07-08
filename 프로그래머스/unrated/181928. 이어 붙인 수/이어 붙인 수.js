function solution(num_list) {
    // 홀수 합 + 짝수 합
    let odd = num_list.filter(n=>n%2===1)
    let even = num_list.filter(n=>n%2!==1)
    return Number(odd.join("")) + Number(even.join(""))
}