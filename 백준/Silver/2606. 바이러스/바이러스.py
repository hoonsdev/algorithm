from collections import deque

N = int(input())
K = int(input())
graph = [[] for _ in range(N + 1)]
for i in range(K):
    s, e = map(int, input().split())
    graph[s].append(e)
    graph[e].append(s)

queue = deque()
visited = [0] * (N + 1)

queue.append(1)

while queue:
    n = queue.popleft()
    n_list = graph[n]
    for node in n_list:
        if not visited[node]:
            visited[node] += 1
            queue.append(node)

answer = 0
for i in range(2, N + 1):
    if visited[i]: answer += 1

print(answer)