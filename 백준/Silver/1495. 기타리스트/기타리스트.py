N, S, M = map(int, input().split())
vol_list = list(map(int, input().split()))


dp = [[0] * (M + 1) for _ in range(N + 1)]  # dp[i][j] = i번째 곡이 볼륨 j로 연주할 수 있는지
dp[0][S] = 1

for i in range(1, N + 1):
    for j in range(M + 1):
        if dp[i - 1][j]:  # i-1 번째 곡에서 연주 가능한 볼륨 찾음
            temp_max = j + vol_list[i - 1]
            temp_min = j - vol_list[i - 1]

            if 0 <= temp_max <= M:
                dp[i][temp_max] = 1
            if 0 <= temp_min <= M:
                dp[i][temp_min] = 1

answer = -1
for i in range(M, -1, -1):
    if dp[N][i] == 1:
        answer = i
        break

print(answer)