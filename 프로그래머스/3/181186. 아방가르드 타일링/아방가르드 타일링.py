def solution(n):
    dp = [0] * 100001
    dp[1] = 1
    dp[2] = 3
    dp[3] = 10
    dp[4] = 23
    dp[5] = 62
    dp[6] = 170

    if n <= 6:
        return dp[n]
    else:
        for i in range(7, n + 1):
            dp[i] = (dp[i - 1] + 2 * dp[i - 2] + 6 * dp[i - 3] + dp[i - 4] - dp[i - 6]) % 1_000_000_007

        return dp[n]
