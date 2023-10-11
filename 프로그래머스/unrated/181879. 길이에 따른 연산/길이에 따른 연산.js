function solution(num_list) {
    let len = num_list.length
    if(len >= 11){
        return num_list.reduce((a,b)=>a+b)
    }else{
        return num_list.reduce((a,b)=>a*b)
    }
}