function solution(n) {
    // 약수
    let result = [];
    for(let i=1; i<=n; i++){
        if(n%i===0) result.push(i)
    }
    return result.length;
}