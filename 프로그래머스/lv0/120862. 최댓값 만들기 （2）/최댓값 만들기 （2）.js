function solution(numbers) {
    let sort = numbers.sort((a,b)=> a-b)
    console.log(sort)
    // 0,1 이 클지 arr.length-1, arr.length-2이 클지
    let a = sort[0]*sort[1]
    let b = sort[sort.length-1]*sort[sort.length-2]
    return Math.max(a,b)
    

}
