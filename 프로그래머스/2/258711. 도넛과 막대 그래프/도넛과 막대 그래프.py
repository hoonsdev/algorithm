def solution(edges):
    answer = [0] * 4 # [생성 정점 번호, 도넛, 막대, 8자]
    
    graph = {} # {node: [진출차수, 진입차수]}
    for edge in edges:
        s, e = edge
        if s not in graph:
            graph[s] = [0, 0]
        if e not in graph:
            graph[e] = [0, 0]
        graph[s][0] += 1
        graph[e][1] += 1
    
    # 생성 정점은 진출차수 2이상, 진입차수 0
    for key in graph:
        if graph[key][0] >= 2 and not graph[key][1]:
            answer[0] = int(key)
            
    # 총 그래프 수: 생성 정점에서 진출 차수
    graph_num = graph[answer[0]][0]
    
    # 생성 정점을 아니까 그래프 연결 간선 제거
    for edge in edges:
        s, e = edge
        if s == answer[0]: graph[e][1] -= 1
        else: continue
        
    # 각 그래프는 이제 고유의 형태를 유지하고 있음
    # 8자는 중심인 정점이 진입 2, 진출 2
    # 막대는 중심인 정점이 진입 0, 진출 <= 1
    for key in graph:
        o, i = graph[key]
        if o == 2 and i == 2: answer[3] += 1
        if o <= 1 and i == 0: answer[2] += 1        
        
    # 총 그래프 수에서 8자, 막대 개수 빼주면 도넛 그래프의 개수
    answer[1] = graph_num - (answer[2] + answer[3])
    
    return answer