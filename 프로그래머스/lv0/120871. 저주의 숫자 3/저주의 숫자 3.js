function solution(n) {
    let xnum = 0;
    for(let i=0; i<n; i++){
        xnum++
        while(xnum%3===0 || String(xnum).includes('3')) xnum++
    }
    return xnum;
}