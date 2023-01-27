function solution(strings, n) {
    // (a, b)이 -1을 반환 -> a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다
    // 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬
    // 0보다 큰 경우, b를 a보다 낮은 인덱스로 소트
    strings.sort((a,b)=>{
        if(a[n] < b[n]) return -1 // a가 더 앞일때 -1 a-b 순서
        else if(a[n] > b[n]) return 1 // b앞으로 보내기
        else if(a<b) return -1 // a앞으로 보낸 뒤 전체비교 (n번째 비교로 안되는경우??)
        else if(a>b) return 1 // b를 앞으로 보내기
        return 0;
    })
    return strings
}