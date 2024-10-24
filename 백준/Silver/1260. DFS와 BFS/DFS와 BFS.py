def dfs(n, v, g):
    v[n] += 1
    print(n, end=' ')
    for node in g[n]:
        if not v[node]:
            dfs(node, v, g)


def bfs(s, g):
    queue = [s]
    visited = [0] * len(g)
    visited[s] += 1

    while queue:
        n = queue.pop(0)
        visited[n] += 1
        print(n, end=' ')

        for node in g[n]:
            if not visited[node]:
                queue.append(node)
                visited[node] += 1


N, M, V = map(int, input().split())

graph = [[] for _ in range(N + 1)]
for _ in range(M):
    n1, n2 = map(int, input().split())
    graph[n1].append(n2)
    graph[n2].append(n1)

for neighbors in graph:
    neighbors.sort()

visited = [0] * (N + 1)  # dfs를 위한 방문 배열

dfs(V, visited, graph)
print()
bfs(V, graph)
