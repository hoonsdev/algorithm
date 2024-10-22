def solution(N, number):
    dp = [[] for _ in range(9)] # dp[i] = N이 i개 있을 때 만들 수 있는 수
    
    for i in range(1, 9):
        # N을 i번 쓰는 경우
        # i를 i - j, j로 분리
        num_list = set()
        num_list.add(int(str(N) * i)) # i = 3 -> 555는 무조건 가능
        for j in range(1, i):
            # dp[i-j] 와 dp[j]로 구현 가능한 수 조합
            for num1 in dp[i - j]:
                for num2 in dp[j]:
                    plus = num1 + num2
                    minus = num1 - num2
                    mul = num1 * num2
                    if num2:
                        div = num1 / num2
                        if div % 1 == 0:
                            num_list.add(div)
                    num_list.add(plus)
                    num_list.add(mul)
                    if minus > 0:
                        num_list.add(minus)
        
        # 일단 현재 생성한 리스트 중에 타겟 있으면 i 반환
        if number in num_list:
            return i
        else:
            # 아니면 N이 i개 있을 때 만들 수 있는 수 dp[i] 
            dp[i].extend([*num_list]) 

    return -1