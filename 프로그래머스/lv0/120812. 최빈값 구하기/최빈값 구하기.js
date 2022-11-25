function solution(array) {
    let answer = '';
    let result = {}
    let max = 0;
    
    for( el of array ){
        result[el] = ( result[el] || 0 ) + 1 //단축평가논리 // 없으면 0 쓰고 무조건 1더하고
        if(max < result[el]){
            max = result[el]
            answer = el
        }else if(max === result[el]){   
            answer = -1
        }
    }
    return answer;
}