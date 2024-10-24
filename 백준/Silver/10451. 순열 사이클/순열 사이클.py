import sys

sys.setrecursionlimit(10000)


def dfs(start, cur, cnt):
    global answer

    if start == cur and cnt:
        answer += 1
        return

    visited[cur] += 1
    dfs(start, graph[cur], cnt + 1)


T = int(input())
result = []

for _ in range(T):
    N = int(input())
    num_list = list(map(int, input().split()))

    graph = [0] * (N + 1)

    for i in range(len(num_list)):
        graph[i + 1] = num_list[i]

    visited = [0] * (N + 1)
    answer = 0

    for i in range(1, len(graph)):
        if not visited[graph[i]]:
            dfs(graph[i], graph[i], 0)

    result.append(answer)

for ans in result:
    print(ans)
