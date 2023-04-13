function solution(my_string) {
    // let answer = ''
    // for(let i of my_string){
    //     if(i === i.toUpperCase()){
    //         answer += i.toLowerCase();
    //     }else{
    //         answer += i.toUpperCase();
    //     }
    // }
    // return answer;
    return my_string.split('').map(v=>v===v.toUpperCase()? v.toLowerCase() : v.toUpperCase()).join('')

}