function solution(n, k) {
    // n 양꼬치 12000
    // k 음료수 2000
    // 만약 n>=10 이상이면 10단위로 k-1
    // Math.floor(n/10) ?인분인지 구할수 있음 24
    let by10 = ~~(n/10); // 2
    let piece = n - by10*10; // 2인분 + 4개..
    let paidDrink = k - by10; 
    
    let meat = (by10*10 + piece) * 12000
    let drink = paidDrink * 2000
    return meat + drink;
}