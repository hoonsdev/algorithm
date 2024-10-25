def dfs(num, arr):
    temp = 0
    for i in range(len(str(num))):
        temp += int(str(num)[i]) ** P

    if temp in arr:
        idx = arr.index(temp)
        return arr[:idx]
    else:
        arr.append(temp)
        return dfs(temp, arr)


A, P = map(int, input().split())

D = list()
D.append(A)

answer = dfs(A, D)

print(len(answer))