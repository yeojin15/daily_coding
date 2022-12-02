function solution(hp) {
    // hp=29 5, 3, 1
    let general = parseInt(hp/5) // general=5
    let captain = parseInt((hp - general*5)/3)
    let soldier = hp - general*5 - captain*3
    
    return general+captain+soldier
}