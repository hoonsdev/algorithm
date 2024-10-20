N, M = map(int, input().split())

visited = [0] * (N + 1)
result = []


def dfs(arr, d):
    if d == M:
        result.append(" ".join(arr))
        return

    for i in range(1, N + 1):
        if not visited[i]:
            visited[i] += 1
            arr.append(str(i))
            dfs(arr, d + 1)
            visited[i] -= 1
            arr.pop()


dfs([], 0)
for res in result:
    print(res)
