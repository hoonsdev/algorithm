import sys

N, K = map(int, sys.stdin.readline().split())
arr = [(0, 0)]
for i in range(N):
    W, V = map(int, sys.stdin.readline().split())
    arr.append((W, V))

dp = [[0] * (K + 1) for _ in range(N + 1)]  # dp[i][j] = 최대 무게가 i, j번째 물품까지 살펴봤을 때 최대 가치

for i in range(1, N + 1):
    W, V = arr[i]
    for j in range(1, K + 1):
        if W > j:
            dp[i][j] = dp[i - 1][j]  # 넣으려는 물건이 최대 무게보다 크면 넣지 않음
        else:
            dp[i][j] = max(dp[i - 1][j - W] + V, dp[i - 1][j])  # 넣으려는 물건을 넣는 경우, 안 넣는 경우

print(dp[N][K])
