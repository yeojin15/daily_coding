function solution(numbers) {
    let sum = numbers.reduce((acc, cur)=>{
        return acc + cur
    })
    return sum/numbers.length;
}