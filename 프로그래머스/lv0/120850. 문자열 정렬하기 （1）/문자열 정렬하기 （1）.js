function solution(str) {
    let word = /[^0-9]/g;
    str = str.replaceAll(word,'').split(''); //['1']
    return str.map(item=>parseInt(item)).sort((a,b)=>a-b)
}