function solution(k, tangerine) {
    const obj = {}
    // {크기:개수}
    tangerine.forEach((el) => {
        obj[el] =  ++obj[el] || 1 // 단축논리평가
    })
    
    const arr=[]
    for(let el in obj){
        arr.push(obj[el])
    }
    let result = 0
    arr.sort((a,b)=>b-a)
    for(let i=0; i<arr.length;i++){
        if(arr[i]-k>=0){
            result = i+1
            break;
        }
        k -= arr[i]
    }
    
    return result

}