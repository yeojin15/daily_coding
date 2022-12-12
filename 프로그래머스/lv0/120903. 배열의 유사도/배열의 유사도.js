function solution(s1, s2) {
    let count = 0;
    for(i in s1){
        for(j in s2){
            if(s1[i]===s2[j]) count++
        }
            
    }
    return count
}