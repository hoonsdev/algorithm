N, M = map(int, input().split())
coin = [list(map(int, input())) for _ in range(N)]
dp = [[0] * N for _ in range(N)]


def flip(x, y):
    for row in range(x + 1):
        for col in range(y + 1):
            coin[row][col] = 1 - coin[row][col]


answer = 0
for i in range(N - 1, -1, -1):
    for j in range(M - 1, -1, -1):
        if coin[i][j]:
            answer += 1
            flip(i, j)

print(answer)
