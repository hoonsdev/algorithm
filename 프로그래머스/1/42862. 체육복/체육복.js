function solution(n, lost, reserve) {
  var answer = 0;
  let result = new Array(n).fill(1);
  // 도난당한 학생들과 여분 있는 학생들을 배열에 표시(-1, +1)
  lost.forEach((student) => {
    result[student - 1]--;
  });
  reserve.forEach((student) => {
    result[student - 1]++;
  });
  // 최종 결과물을 가지고 수업 들을 수 있는 학생의 최댓값 구하기
  result.map((el, idx) => {
    if (el === 2) {
      if (result[idx - 1] === 0 && result[idx + 1] === 0) {
        result[idx - 1]++;
        result[idx]--;
      } else if (result[idx - 1] === 0 && result[idx + 1] !== 0) {
        result[idx - 1]++;
        result[idx]--;
      } else if (result[idx - 1] !== 0 && result[idx + 1] === 0) {
        result[idx + 1]++;
        result[idx]--;
      }
    }
  });
  result.forEach((el) => (el >= 1 ? answer++ : answer));
  return answer;
}