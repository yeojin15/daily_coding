function solution(my_string) {
    let vow = /[aeiou]/g
    return my_string.replace(vow, '')
}