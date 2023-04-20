// 1. 각 종류별 옷 개수를 구한다
// 2. 각 종류별로 선택가능 경우의 수 + 1(안입는경우)를 곱한다 ... ['선글','안경'] => 선글,안경,안써
// 3. 모든 경우의 수 - 1(모든종류의어떤의상도안입는경우)
// hashmap
function solution(clothes) {
    // hashmap 선언 - 종류별로 개수를 담은 hashmap 선언
    const map = new Map()
    
    // clothes 배열을 순회하며 hashmap에 의상종류와 개수 저장 (바나나!)
    for(let i=0; i<clothes.length; i++){
        // 0번째 -> ['yellow_hat','headgear']
        const clothesType = clothes[i][1];
        // clothesType이 이미 저장돼있거나, 처음저장하거나 두가지 경우
        
        // list 작업으로 얻고싶은 형식 -> {headgear: [yello_hat, green_turban]}
        // 제일 처음은 빈배열 들어갑니다 왜냐면 clothesType 쌔거니까용
        const list = map.get(clothesType) ?? new Array()
        // 얻어낸 value를 배열에 넣어준다
        list.push(clothes[i][0])
        
        // 방금 업데이트한 옷 타입의 value를 해쉬맵에 set 해준다
        map.set(clothesType, list)
    }
    let answer = 1 // 계속 곱해나갈거니까 0하면안돼~!
    
    // 해쉬맵의 키 뽑는거
    for(let key of map.keys()){
        // 각 키의 밸류값 -> 그러면 [yellow_hat, green_turban].length === 2 -> 안입는경우+1해주기 => answer에 계속곱하기
        answer *= map.get(key).length + 1 
    }
    return answer - 1
}