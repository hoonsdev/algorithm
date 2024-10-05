bingo = [list(map(int, input().split())) for _ in range(5)]
call = []


def count_bingo():
    count = 0
    # 가로 빙고 체크
    for i in range(5):
        if all(x == 0 for x in bingo[i]):  # 가로줄 모두 0인지 확인
            count += 1

    # 세로 빙고 체크
    for i in range(5):
        if bingo[0][i] == 0 and bingo[1][i] == 0 and bingo[2][i] == 0 and bingo[3][i] == 0 and bingo[4][i] == 0:
            count += 1

    # 대각선 빙고 체크
    if bingo[0][0] == 0 and bingo[1][1] == 0 and bingo[2][2] == 0 and bingo[3][3] == 0 and bingo[4][4] == 0:
        count += 1

    if bingo[0][4] == 0 and bingo[1][3] == 0 and bingo[2][2] == 0 and bingo[3][1] == 0 and bingo[4][0] == 0:
        count += 1

    return count


# 부른 숫자들 입력 받기
for _ in range(5):
    word = list(map(int, input().split()))
    call.extend(word)

answer = 0
for k in range(len(call)):
    is_ok = False  # 빙고 3개 이상이 완성되었을 때 종료를 위한 변수
    for i in range(5):
        for j in range(5):
            if bingo[i][j] == call[k]:
                bingo[i][j] = 0  # 불린 숫자는 0으로 설정
                temp = count_bingo()  # 빙고 개수 확인
                if temp >= 3:  # 빙고 3개 이상이 완성되면 종료
                    is_ok = True
                    break  # 가장 안쪽 for문 탈출
        if is_ok:
            break  # 두 번째 for문 탈출
    if is_ok:
        answer = k + 1  # 몇 번째로 완성되었는지 저장
        break

print(answer)
