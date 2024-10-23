N = int(input())

score = [0]
for _ in range(N):
    score.append(int(input()))

dp = [0] * (N + 1)

for i in range(1, N + 1):
    if i == 1:
        dp[i] = score[1]
    elif i == 2:
        dp[i] = score[1] + score[2]
    else:
        dp[i] = max(dp[i - 3] + score[i - 1], dp[i - 2]) + score[i]

print(dp[N])
