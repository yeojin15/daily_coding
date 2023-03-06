function solution(str1, str2) {
    // 2개씩 자르는 함수 만들기
    function cut(text){
        let newArr = [];
        let regex = /[a-zA-Z]{2}/g;
        for(let i=0; i<text.length-1; i++){    // 마지막거는 빼기(뒷글자가 없음)
            let twoLetter = text.substr(i,2)    // 2개자르기
            if( twoLetter.match(regex) ) newArr.push(twoLetter.toUpperCase())
        }
        return newArr
    }
    
    const arr1 = cut(str1) //['FR'...]
    const arr2 = cut(str2)

    // const setA = new Set([...arr1])
    // const setB = new Set([...arr2]) // set객체 : set{2}["FR","RA"]
    
    //교집합
    Set.prototype.intersection=function(set){
        return new Set([...this].filter(v => set.has(v)));
    }
    //합집합
    Set.prototype.union = function (set) {
        return new Set([...this, ...set]);
    };

//     let interS = setA.intersection(setB).size // default undefined
//     let unionS = setA.union(setB).size
    
//     if(!interS && !unionS) return 65536;
//     else return Math.floor((interS/unionS)*65536)
    let inter=0;
    let union=0;
    const allSet = new Set([...arr1,...arr2]);
    allSet.forEach(item=>{
        const setarr1 = arr1.filter(value=>value===item).length;
        const setarr2 = arr2.filter(value=>value===item).length;
        inter += Math.min(setarr1, setarr2)
        union += Math.max(setarr1, setarr2)
    })
    console.log(inter)
    console.log(union)
    if(inter===0&&union===0) return 65536;
    else return Math.floor((inter/union)*65536)
    
}