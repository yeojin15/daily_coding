function solution(sides) {
    // [3,6] 
    // 1. max(6) -> max-min < x <= max
    // 2. x      -> max < x <= max+min
    
    let max = Math.max(...sides);
    let min = Math.min(...sides);
    let rest = [];
    for(let i=1; i<=max; i++){
        if(max-min < i){
            rest.push(i)
        }
    }
    for(let i=max+1; i<max+min; i++){
        rest.push(i)
    }
    return rest.length;
}