N, M = map(int, input().split())

words = []
wordlen = 0

# 단어 입력과 길이 계산
for _ in range(N):
    word = input()
    words.append(word)
    wordlen += len(word)

# 기본적으로 각 단어 사이에 들어갈 언더바 계산
tmp = '_' * ((M - wordlen) // (N - 1))

# 모든 단어 사이에 기본 언더바 추가
for i in range(N - 1):
    words[i] += tmp

# 나머지 언더바 처리
remaining = (M - wordlen) % (N - 1)

idx = 1
check = True

# 남은 언더바를 사전순에 맞게 배치
while remaining > 0:
    if check:
        # 소문자 앞의 단어에 언더바 추가
        if 'a' <= words[idx][0] <= 'z':
            words[idx - 1] += '_'
            remaining -= 1
        idx += 1
    else:
        # 대문자 앞의 단어에 언더바 추가
        if 'A' <= words[idx][0] <= 'Z':
            words[idx - 1] += '_'
            remaining -= 1
        idx -= 1

    # 인덱스가 범위를 벗어나면 방향을 바꿔 순회
    if idx == N:
        check = not check
        idx -= 1

# 최종 결과 생성
answer = ''.join(words)
print(answer)