function solution(n) {
    // 조각/사람 => 6으로 나눠떨어져야함 아니면 한판씩 더 추가
    
    let piece = 6;
    while( piece%n !== 0 ){
        piece += 6;
    }
    return piece/6
}