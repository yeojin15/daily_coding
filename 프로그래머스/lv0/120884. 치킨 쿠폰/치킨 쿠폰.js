function solution(chicken) {
    // 1081마리 => 쓴쿠1081 + 서108 ...남쿠1 : 108
    //            쓴쿠108 + 서10 ...남쿠8 : 10
    //            쓴쿠10 + 서1 ...남쿠1 :1 
    //            남쿠1+8+1 -> 1마리 더시키기 -> 서1추가 + 남쿠1 : 1
    // 108 + 10 + 1 + 1 = 120마리 
    
    // 113마리=쿠폰113장 => 서비스11마리+남은쿠폰3장
    // 서비스11마리=쿠폰11장 => 서비스1마리+남은쿠폰1장
                 
    let coupon = chicken
    let sv = 0
    // 서비스>9 때까지만 반복
    while(coupon > 9){
        sv += Math.floor(coupon/10)
        coupon = Math.floor(coupon/10) + coupon%10
    }
    return sv
}