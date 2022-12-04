function solution(num_list, n) {
    // num_list.slice(0, 3) 0번 1번 2번 (3개출력)
    // slice(3,6) 3,4,5
    let result = [];
    for(let i=0; i<num_list.length/n; i++){ // /n을 안했더니 빈 배열이 주르륵
        result = [...result, num_list.slice(i*n, i*n+n)]
    }
    return result
}