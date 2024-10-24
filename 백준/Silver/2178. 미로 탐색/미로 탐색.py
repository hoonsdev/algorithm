from collections import deque


def bfs(x, y, c):
    count = 0

    queue = deque()
    queue.append((x, y, c))

    while queue:
        cx, cy, cnt = queue.popleft()

        if cx == N - 1 and cy == M - 1:
            count = cnt
            break

        for i in range(4):
            nx = cx + dx[i]
            ny = cy + dy[i]

            if 0 <= nx < N and 0 <= ny < M and maze[nx][ny] == '1':
                if not visited[nx][ny]:
                    visited[nx][ny] += 1
                    queue.append((nx, ny, cnt + 1))

    return count


N, M = map(int, input().split())

dx = [1, -1, 0, 0]
dy = [0, 0, -1, 1]

maze = []
for i in range(N):
    maze.append(input())

visited = [[0] * M for _ in range(N)]
visited[0][0] += 1

answer = bfs(0, 0, 1)

print(answer)
