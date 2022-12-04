function solution(numbers, k) {
//[1,2,3,4], 2    >>>> k:index > 1:0, 2:2
//[1,2,3], 3      >>>> k:index > 1:0, 2:2, 3:1(원래라면4 -3)
//[1,2,3,4,5,6],5 >>>> k:index > 1:0, 2:2, 3:4, 4:0(원래6 -6), 5:2(원래8-6) length만큼 빼야하는군
    let answer = 0;
    for(let i=0; i<k; i++){
        answer += 2; // 인덱스임!
        if(answer > numbers.length){
            answer = answer-numbers.length;
        }
    }
    return answer-1
}