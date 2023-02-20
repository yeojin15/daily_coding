function solution(cacheSize, cities) {
    let time = 0; // 총 실행시간
    let list=[];
    let city = cities.map(item=>item.toLowerCase()); // 전부 소문자로
    
    for(let i=0; i<city.length; i++){
        if( !list.includes(city[i]) ){
            time += 5;
            list.push(city[i]);
            if(list.length > cacheSize) list.shift()
        }
        else{
            time += 1;
            // 그 요소 인덱스 찾아서 제거 후 맨 뒤에 추가
            let remove = list.indexOf(city[i])
            list.splice(remove, 1)
            list.push(city[i]);
        }
    }
    return time;
    
}