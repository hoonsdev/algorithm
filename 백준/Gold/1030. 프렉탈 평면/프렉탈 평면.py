s, N, K, R1, R2, C1, C2 = map(int, input().split())


# 흰색 0, 검정 1
def check_black_zone(r, c, ul):
    return 1 if ((N - K) // 2) * ul <= r < ((N + K) // 2) * ul and ((N - K) // 2) * ul <= c < (
            (N + K) // 2) * ul else 0


def get_value(x, y, step):
    # step이 1일 때, 가장 작은 도형에서 흑백을 판단
    if step == 1:
        return check_black_zone(x, y, 1)

    # 현재 단위 길이
    unit_length = N ** (step - 1)

    # 검정색 영역에 있는지 확인
    if check_black_zone(x, y, unit_length):
        return 1
    else:
        # 검정색이 아니면 더 작은 단위로 재귀 호출
        return get_value(x % unit_length, y % unit_length, step - 1)


if s == 0:
    print('0')
else:
    result = []
    for i in range(R1, R2 + 1):
        answer = ''
        for j in range(C1, C2 + 1):
            res = get_value(i, j, s)
            answer += str(res)
        result.append(answer)

    print("\n".join(result))
