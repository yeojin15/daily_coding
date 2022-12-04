function solution(balls, share) {
    return factorial(balls) / (factorial(balls-share) * factorial(share));
}

function factorial(num){
    let fact = BigInt(1);
    for(let i=num; i>1; i--){
        fact *= BigInt(i)
    }
    return BigInt(fact)
}