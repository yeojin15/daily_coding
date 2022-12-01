function solution(str, n) {
    let result = [];
    str = str.split(""); // 다잘라서배열로
    for(let i=0; i<str.length; i++){
        result = result + str[i].repeat(n)
    }
  return result
    
}

