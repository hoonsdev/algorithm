def dfs(x, y, idx):
	global result

	result[idx] += 1

	for i in range(4):
		nx = x + dx[i]
		ny = y + dy[i]

		if 0 <= nx < N and 0 <= ny < N and arr[nx][ny] == '1':
			if not visited[nx][ny]:
				visited[nx][ny] = idx + 1
				dfs(nx, ny, idx)




N = int(input())

arr = []
for i in range(N):
	arr.append(input())

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

visited = [[0] * N for _ in range(N)]
section = 0
result = [0]

for i in range(len(arr)):
	for j in range(len(arr[i])):
		if arr[i][j] == '1' and not visited[i][j]:
			section += 1
			visited[i][j] = section
			result.append(0)
			dfs(i, j, section)

print(section)
sorted_arr = sorted(result[1:])
for i in range(len(sorted_arr)):
	print(sorted_arr[i])