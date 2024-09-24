def move_gears(upper, lower):
    temp1 = upper[:]
    temp2 = lower[:]

    while len(temp1) <= len(upper) + len(lower):
        fit = True
        for i in range(min(len(temp1), len(temp2))):
            if temp1[i] == 2 and temp2[i] == 2:
                temp1.insert(0, 0)  # temp1에 0을 앞에 삽입
                fit = False
                break
        if fit:
            break

    return max(len(temp1), len(lower))


# 입력 받기
short_gear = list(map(int, input()))
long_gear = list(map(int, input()))

if len(short_gear) > len(long_gear):
    short_gear, long_gear = long_gear, short_gear

# gear1 이동 시뮬레이션
answer1 = move_gears(short_gear, long_gear)

# gear2 이동 시뮬레이션
answer2 = move_gears(long_gear, short_gear)

# 최종 정답 계산
answer = min(answer1, answer2)
print(answer)
