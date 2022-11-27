function solution(denum1, num1, denum2, num2) {
    let max = 1;
    let top = denum1*num2 + denum2*num1;
    let btm = num1*num2;
    
    for(let i=0; i<=btm; i++){
        if(top%i===0 && btm%i===0) max = i;
    }
    return [top/max, btm/max]
}