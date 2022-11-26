function solution(n) {
    // 7의 배수
    // n % 7 해서 나머지가 0이면 n/7 floor
    // n % 7 해서 나머지가 1이상이면 n/7 floor +1 
    if(n%7===0) return Math.floor(n/7);
    else if(n%7>=1) return Math.floor(n/7) + 1;
}