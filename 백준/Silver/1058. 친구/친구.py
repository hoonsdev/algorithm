N = int(input())

friends = [set() for _ in range(N)]
two_friends = [set() for _ in range(N)]
result = [0] * N

for i in range(N):
    info = input()
    count = 0
    for j in range(len(info)):
        if info[j] == 'Y':
            friends[i].add(j)
            count += 1
    result[i] = count

# 친구인 애 찾아가서 걔 친구 중에 나랑 친구 아닌애 찾으면 되잖아
for i in range(len(friends)):
    for j in friends[i]:
        my_list = friends[i].copy()
        f_list = friends[j].copy()
        my_list.remove(j)
        f_list.remove(i)
        diff = f_list.difference(my_list)
        two_friends[i].update(diff)

for i in range(len(two_friends)):
    result[i] += len(two_friends[i])

print(max(result))