from collections import deque

def solution(n, edge):
    answer = 0
    
    graph = [[] for _ in range(n + 1)]
    
    for s, e in edge:
        graph[s].append(e)
        graph[e].append(s)
    
    max_length = 0
    answer = 0
    deq = deque([(1, 0)]) # (현재 노드, 거리)
    
    visited = [-1] * (n + 1) # 방문 여부 및 거리
    visited[1] = 0
    
    while deq:
        cur, length = deq.popleft()
        
        # 현재 노드와 연결되어 있는 놈들 확인
        for node in graph[cur]:
            # 미방문시에만 탐색
            if visited[node] == -1:
                visited[node] = length + 1 # 방문할 노드 거리 업데이트
                deq.append((node, length + 1))
                
                if visited[node] > max_length:
                    max_length = visited[node]
                    answer = 1 # 최댓값 초기화돼서 정답도 초기화
                elif visited[node] == max_length:
                    answer += 1
    
    return answer