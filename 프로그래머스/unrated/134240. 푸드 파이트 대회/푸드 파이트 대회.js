function solution(food) {
    // food의 0번째는 1(물)
    // 1번째부터 반으로 나눠 내림가능하면 넣기
    let floor = food.map(item => Math.floor(item/2))
    let half = []
    console.log(floor) // [1, 7, 1, 2] -> [ 0, 3, 0, 1 ]
    for(let i=1; i<floor.length; i++){
        for(let j=1; j<=floor[i]; j++){
            half.push(i)
        }
    }
    let front = half.concat(0).concat(half.reverse())
    return front.join('')
    
}