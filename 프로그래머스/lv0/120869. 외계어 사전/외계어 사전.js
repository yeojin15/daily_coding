function solution(spell, dic) {
    spell = spell.sort().join('') // 'ops'
    let newArr = []
    for(let i=0; i<dic.length; i++){
        newArr.push(dic[i].split('').sort().join(''))
    }
    return newArr.map(item => item.includes(spell)).includes(true) ? 1 : 2
}