import heapq    
INF = float('inf')

def solution(N, road, K):
    graph = [[] for _ in range(N + 1)]
    
    # 그래프 초기화
    for src, dst, weight in road:
        graph[src].append((dst, weight))
        graph[dst].append((src, weight))
    
    # 다익스트라 알고리즘
    def dijkstra(start):
        heap = []
        heapq.heappush(heap, (0, start))
        weights = [INF] * (N + 1)
        weights[start] = 0
        
        while heap:
            weight, node = heapq.heappop(heap)
            if weight > weights[node]:
                continue
            
            for n, w in graph[node]:
                newW = weight + w
                if weights[n] > newW:
                    weights[n] = newW
                    heapq.heappush(heap, (newW, n))
                    
        return weights

    weights = dijkstra(1)  # 1번 노드에서 시작
    answer = len([w for w in weights if w <= K])
    
    return answer