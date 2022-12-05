function solution(box, n) {
    // 10:3, 8:2, 6:2 -> 3*2*2=12
    return ~~(box[0]/n) * ~~(box[1]/n) * ~~(box[2]/n)
}