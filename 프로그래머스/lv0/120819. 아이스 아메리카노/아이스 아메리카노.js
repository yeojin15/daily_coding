function solution(money) {
    // 마실수있는 잔 수 floor
    let cup = Math.floor(money/5500);
    let change = money%5500;
    let result = new Array(cup, change)
    return result;
    
    
}