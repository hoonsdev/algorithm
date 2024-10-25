import sys
sys.setrecursionlimit(100000)

def dfs(x, y):
	for i in range(4):
		nx = x + dx[i]
		ny = y + dy[i]

		if 0 <= nx < N and 0 <= ny < N and temp_arr[nx][ny]:
			if not visited[nx][ny]:
				visited[nx][ny] += 1
				dfs(nx, ny)

N = int(input())

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]
arr = []
max_height = 1
max_area = 0

for _ in range(N):
	temp = list(map(int, input().split()))
	max_height = max(max_height, *temp)
	arr.append(temp)

temp_h = 0
while temp_h <= max_height:
	temp_arr = [[0] * N for _ in range(N)]

	for i in range(N):
		for j in range(N):
			if arr[i][j] > temp_h:
				temp_arr[i][j] += 1 # 안 잠기면 1

	section = 0
	visited = [[0] * N for _ in range(N)]

	for i in range(N):
		for j in range(N):
			if temp_arr[i][j] and not visited[i][j]:
				visited[i][j] += 1
				section += 1
				dfs(i, j)

	max_area = max(max_area, section)
	temp_h += 1

print(max_area)