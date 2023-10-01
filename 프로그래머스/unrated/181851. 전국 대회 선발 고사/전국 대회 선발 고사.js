function solution(rank, attendance) {
    let result = []
    // 참석 가능한 학생만 result 배열에 push
    rank.forEach((el, index) => {
        if (attendance[index]) {
            result.push(el)
        }
    })
    // 참석 가능한 학생을 rank 가 높은 순으로(숫자가 작은 순으로) 정렬
    let sortedRank = result.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        }
    })
    
    
    let [a, b, c, ...rest] = sortedRank
    
    var answer = 10000 * rank.indexOf(a) + 100 * rank.indexOf(b) + rank.indexOf(c);
    return answer;
}