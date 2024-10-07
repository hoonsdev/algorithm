def get_level(r, c):
    return max(abs(r), abs(c))


def get_step(r, c, l):
    if c == l and -l <= r <= l - 1:
        return 0, abs(r - l)
    elif r == -l and -l <= c <= l - 1:
        return 1, abs(c - l)
    elif c == -l and -l + 1 <= r <= l:
        return 2, abs(r + l)
    elif r == l and -l + 1 <= c <= l:
        return 3, abs(c + l)
    return -1, -1


def get_value(r, c):
    if r == 0 and c == 0:
        return 1

    level = get_level(r, c)
    step, idx = get_step(r, c, level)
    cnt_prev = get_max_num(level - 1)

    return cnt_prev + step * 2 * level + idx


def get_max_num(l):
    length = l * 2 + 1
    return length ** 2


answer = []

r1, c1, r2, c2 = map(int, input().split())
# 출력할 때 문자열 길이 수 맞추기
max_value = 1
for i in range(r1, r2 + 1):
    for j in range(c1, c2 + 1):
        value = get_value(i, j)
        max_value = max(max_value, value)

for i in range(r1, r2 + 1):
    temp = ''
    for j in range(c1, c2 + 1):
        value = get_value(i, j)
        if j == c1:
            temp += str(value).rjust(len(str(max_value)), ' ')
        else:
            temp += ' ' + str(value).rjust(len(str(max_value)), ' ')
    answer.append(temp)

print("\n".join(answer))
