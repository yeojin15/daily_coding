function solution(angle) {
    return angle===180 ? 4 : angle<180 && angle>90 ? 3 : angle===90 ? 2 : 1
}