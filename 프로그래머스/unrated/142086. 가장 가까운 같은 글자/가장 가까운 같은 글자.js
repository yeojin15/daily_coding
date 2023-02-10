function solution(s) {
    // 문자열 돌면서 처음 나오는 글자면 -1 banana -> 3번a -> 1번a -> 2
    // 중복문자라면 가장 최근에 나왔던 (자기 인덱스) - (최근나왔던 같은문자의인덱스)
    // 새로운 배열 선언하고 글자 하나씩 넣어가면서 찾기
    // ex)bana
    let stack=[];
    let answer=[]
    for(let i=0; i<s.length; i++){
        if(!stack.includes(s[i])){ // 글자가없으면
            stack.push(s[i]);
            answer.push(-1)
            continue; //끊어주기
        }
        if(stack.includes(s[i])){ // 글자 있으면
            answer.push(stack.length - stack.lastIndexOf(s[i])); //4-4를 빼버려서 안됨!
            stack.push(s[i]); // stack에 먼저 넣으면 안돌아가네??? 
                              // bana
            
            continue;
        }
    }
    return answer;
}