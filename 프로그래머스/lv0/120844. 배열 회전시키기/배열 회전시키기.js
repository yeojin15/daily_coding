function solution(numbers, direction) {
    let slice = numbers.slice();
    if(direction==='right'){
        slice.pop() // 맨뒤빼기
        slice.unshift(numbers[numbers.length-1])
    }else{
        slice.shift() // 맨앞빼기
        slice.push(numbers[0]);
    }
    return slice
}