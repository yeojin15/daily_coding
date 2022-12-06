function isPrime(num){
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}

function solution(n) {
    let result = [];
    for(let i=1; i<=n; i++){
        if(isPrime(i) === false){
            result.push(i)
        }
    }
    return result.length;
    
}

