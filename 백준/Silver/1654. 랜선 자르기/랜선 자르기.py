# 원래라면 나눌 길이를 1부터 랜선의 최대 길이까지 반복하면서
# 그 길이로 N개 생성 가능한지 완전탐색 해야함
# 근데 그렇게 하면 딱봐도 시간제한 걸림
# 그래서 이분탐색을 통해서 적합한 "길이"를 찾는다!

import sys

def binary_search(low, high):
	global answer

	if high < low:
		return

	mid = (low + high) // 2

	temp = 0
	for lan in LANs:
		temp += lan // mid # 몇개의 랜선으로 나눠지는지 계산
	
	if temp >= N: # 이 길이보다 조금 더 길게 해도 가능성 있음
		answer = mid
		binary_search(mid + 1, high)
	else: # 이 길이로는 N개 못만드니까 더 작게
		binary_search(low, mid - 1)



K, N = map(int, sys.stdin.readline().split())

LANs = []
for _ in range(K):
	LANs.append(int(sys.stdin.readline()))

answer = 0

binary_search(0, max(LANs) * 2) # 2를 곱해줘야 처음에 max 값으로 랜선 나눔

print(answer)