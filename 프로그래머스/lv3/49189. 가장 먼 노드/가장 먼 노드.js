// 그래프문제 -> 1번 노트부터 가장 먼 노드의 개수 반환
// vertex 로 그래프 먼저 만들어야함

// Action
// 1. vertex->gragh 만들기
// 2. BFS로 그래프 전체탐색
// 3. 탐색하면서 각 노드까지 거리를 distance배열에 저장할거임
// 4. 탐색하면 거기서 최댓값 찾는다(제일 먼)
// 5. 최댓값이 몇개가 있는지 세어서 개수 리턴
function solution(n, vertex) {
    const graph = makeGraph(n, vertex)
    
    // BFS 함수 정의
    // 방문한 노드인지 저장해둬야함! 안그럼 인피니트
    function bfs(start){
        let visited = Array(n+1).fill(false)
        const dist = Array(n+1).fill(0)
        
        // BFS진행을 위한 큐 생성, 시작 노드 삽입
        let queue = []
        queue.push(start)
        visited[start] = true
        
        while(queue.length>0){
            let node = queue.shift() // node=1
            for(let next of graph[node]){
                if(!visited[next]){ //방문하지않은노드라면
                    queue.push(next) //큐에넣고
                    visited[next]=true //방문표시
                    dist[next]=dist[node]+1 //거리갱신
                }
            }
        }
        return dist
    }
    
    let dist = bfs(1)
    let maxDist = Math.max(...dist)
    let count = dist.filter(v=>v===maxDist).length
    
    return count
    
    
}

// 인접리스트(adjacent) 형태 그래프 반환(매개변수 노드개수와 vertex)
// array 유틸 함수
function makeGraph(n, vertex){
    /*
        for(let i=0, i<n+1; ++i){
            adj.push([])
        }
        => adj=[ [],[],[],[],[] ]
    */
    let adj = Array.from({length: n+1}, ()=>[]) //인덱스와 개수 -1차이가 있으니까 걍 +1하고 0번째안써
    for( let [u,v] of vertex){
        adj[u].push(v)
        adj[v].push(u)
    }
    return adj
    
    /*
    adj = [
        [], //0번째안써
        [3,2], //노드1과 인접한 노드들
        [3,1,4,5], //노드2와 인접한 노드들
        [6,4,2,1], //노드3
        [3,2], //노드4
        [2], //노드5
        [3] //노드6
    ]
    */
}