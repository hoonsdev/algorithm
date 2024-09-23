import sys

arr = list()
result = set()


def dfs():
    # 리스트에는 감소하는 수가 가능한 숫자들이 순서대로 들어가있음
    if len(arr) > 0:
        result.add(int("".join(map(str, arr))))

    # 다음 자리에 올 수 선택
    for i in range(0, 10):
        if len(arr) == 0 or arr[-1] > i:  # 마지막 자리수가 다음에 올 수보다 큼 -> 감소하는 수
            arr.append(i)
            dfs()
            arr.pop()  # 0으로 시작 ~ 9로 시작까지 전부 다 고려 .. 계속 dfs 돌려서 다음 자리수를 결정하게 한다


N = int(sys.stdin.readline())

try:
    dfs()
    result = list(result)
    result.sort()
    print(result[N - 1])
except:
    print(-1)
