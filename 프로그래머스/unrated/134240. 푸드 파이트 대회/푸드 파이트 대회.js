function solution(food) {
    // food의 0번째는 1(물)
    // 1번째부터 반으로 나눠 내림가능하면 넣기
    let floor = food.map(item => Math.floor(item/2))
    let half = []

    for(let i=1; i<floor.length; i++){
        for(let j=1; j<=floor[i]; j++){
            half.push(i)
        }
    }
        let copy = half.slice()
    let front = half.concat(0, copy.reverse())
    return front.join('')
}