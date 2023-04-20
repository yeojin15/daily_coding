// 다리에 트럭 통과시킬 수 있는 조건 (무게&&거리)
// 1. 무게기준
// 다리에있는 트럭 총 무게 + 맨앞대기하고있는 트럭 = 총 무게 합
// 총 무게 합 <= 다리가 견딜수있는 무게
// 2. 거리기준
// 다리에 올라갈수있는 트럭개수 <= 다리길이

// 조건충족하면 action ->
// 1. 다리에 트럭 진입시킴(대기트럭에서 트럭 제거)
// 2. 거리기준으로 남은거리를 다리의 길이로 업데이트 
// 3. 무게기준으로 총 무게에 방금 들어간 트럭무게 더해주기(총 무게)
function solution(bridge_length, weight, truck_weights) {
    // 다리를 표현할 뭐가 없음-> 선언해라 = 큐
    let bridge = [] // queue
    let total_weight = 0; // 다리 위 트럭 무게 저장할 변수
    let time = 0; // 경과시간 저장할 변수
    
    // 모든 트럭이 큐에서 나올 때까지 반복
    while(bridge.length > 0 || truck_weights.length > 0){
        time++
        
        // 다리위에 트럭있다면 트럭위치를 시간에맞춰 +1씩 거리 증가시켜줌(앞으로 전진)
        for(let i=0; i<bridge.length; ++i){
            bridge[i][1]++
        }
        
        // 큐의 첫번째있는 트럭이 다리 끝에 갔다면 -> 트럭 내려줘
        if(bridge[0] && bridge[0][1] === bridge_length){
            const truck = bridge.shift() //[truck_weight, 위치]
            total_weight -= truck[0]
        }
        
        // 대기중인트럭이 있고 && 무게기준+거리기준 조건 맞으면 진입가능
        if(truck_weights.length > 0 && 
           total_weight + truck_weights[0] <= weight && 
           bridge.length < bridge_length){
            // 다리에 트럭 진입시킨다 action 순서대로 코드짜주기
            let truck_weight = truck_weights.shift()
            bridge.push([truck_weight, 0])
            total_weight += truck_weight
        }
    }  
    
    // 경과시간을 반환
    return time
}