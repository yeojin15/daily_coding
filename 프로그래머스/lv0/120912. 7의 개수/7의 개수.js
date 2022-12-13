function solution(array) {
    array = array.join('')
    let count=0;
    for(i in array){
        if(array[i]==='7') count++
    }
    return count
}