function solution(array) {
    // sort() 오름차순
    // length/2  + floor
    return array.sort((a,b) => a-b)[Math.floor(array.length / 2)];
}