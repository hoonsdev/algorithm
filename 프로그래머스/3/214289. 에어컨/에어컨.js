function solution(temperature, t1, t2, a, b, onboard) {
    var answer = 0;
    
    // -10 부터 시작하는 조건을 0부터 시작으로 바꾸기 위해 10씩 더해줌
    t1 += 10
    t2 += 10
    temperature += 10
    
    // dp[i][j]: i시간에 j온도를 만들기 위한 최소전력
    let dp = Array.from({length: onboard.length}, () => Array.from({length: 51}, () => 1000 * 100))
    dp[0][temperature] = 0
    
    // 온도 증감 방향성 설정
    let diff = 1
    if (temperature > t2) {
        diff = -1
    }

    for (let i = 1; i < onboard.length; i++) {
        for (let j = 0; j < 51; j++) {
            const arr = [1000 * 100]
            // 손님이 없을때에는 상관없지만, 있으면 현재온도가 쾌적온도 범위 내여야 함
            // 이 조건을 만족하지 않으면 그냥 다음 온도로 넘어가는것(j번째에는 최대값을 저장하겠지?)
            if ((onboard[i] && t1 <= j && j <= t2) || !onboard[i]) {
                // 4가지 케이스 -> 에어컨 끔: 온도 변함 / 안변함 , 에어컨 킴: 온도 변함 / 안변함
                // 에어컨 끔
                // 현재온도 변함
                if (0 <= j + diff && j + diff <= 50) arr.push(dp[i - 1][j + diff])
                // 실외온도 = 현재온도라서 변하지 않음
                if (j == temperature) arr.push(dp[i - 1][j])
                // 에어컨 킴
                // 현재온도 변함
                if (0 <= j - diff && j - diff <= 50) arr.push(dp[i - 1][j - diff] + a)
                // 현재온도 = 희망온도라서 변하지 않음 -> 유지
                if (t1 <= j && j <= t2) arr.push(dp[i - 1][j] + b)
            }
            dp[i][j] = Math.min(...arr)
        }
    }
    
    answer = Math.min(...dp[onboard.length - 1])

    return answer;
}