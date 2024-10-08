import sys
sys.setrecursionlimit(10**4)

dx = (1, 0, 0, -1)
dy = (0, -1, 1, 0)
ds = ('d', 'l', 'r', 'u')
answer = ''

def dfs(cx, cy, n, m, r, c, k, path):
    global answer

    # 남은 이동 거리가 최소 거리보다 작으면 탐색 x
    if k - len(path) < abs(r - cx) + abs(c - cy):
        return

    if cx == r and cy == c and len(path) == k:
        answer = path
        return

    for i in range(4):
        nx, ny = dx[i] + cx, dy[i] + cy
        if 0 < nx <= n and 0 < ny <= m and not answer:
            temp = path + ds[i]
            dfs(nx, ny, n, m, r, c, k, temp)


def solution(n, m, x, y, r, c, k):
    # d l r u 가 사전 순서
    min_length = abs(r - x) + abs(c - y)
    
    if min_length > k or (k - min_length) % 2:
        return 'impossible'
    
    dfs(x, y, n, m, r, c, k, '')
    return answer