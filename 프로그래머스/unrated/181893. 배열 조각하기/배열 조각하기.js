function solution(arr, query) {
    for (i = 0; i < query.length; i++) {
        if (!(i % 2)) {
            // 짝수 인덱스
            arr = arr.slice(0, query[i]+1)
        } else {
            // 홀수 인덱스
            arr = arr.slice(query[i])
        }
    }
    var answer = [...arr];
    return answer;
}