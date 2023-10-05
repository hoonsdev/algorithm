function solution(lines) {
  var answer = 0;
  // 시작점 작은 순서대로 정렬
  const sortedLines = lines.sort((a, b) => a[0] - b[0]);
  // 겹치는 부분을 담을 result 배열
  let result = [];
  // lines 요소 개수만큼 실행
  for (let i = 0; i < 3; i++) {
    for (let j = i + 1; j < 3; j++) {
      // 어느 선분에 대해 도착점 이전에 다른 선분의 시작점이 있을 경우 -> 겹침
      if (sortedLines[i][1] > sortedLines[j][0]) {
        if (sortedLines[i][1] > sortedLines[j][1]) {
          result.push([sortedLines[j][0], sortedLines[j][1]]);
        } else {
          result.push([sortedLines[j][0], sortedLines[i][1]]);
        }
      }
    }
  }
  if (result.length === 0) {
    // 겹치는게 없을 경우 -> result에 아무것도 push되지 않음
    answer = 0;
  } else if (result.length === 1) {
    // 겹치는게 하나 -> 그 구간의 길이가 answer
    answer = result[0][1] - result[0][0];
  } else if (result.length === 2) {
    // 겹치는게 두개 -> 겹치는 구간에 빈 구간이 있음
    result.forEach((el) => {
      answer += el[1] - el[0];
    });
  } else if (result.length === 3) {
    // 겹치는게 두개 -> 겹치는 구간 쭉 이으면 빈 구간 없음
    // 겹치는 구간 시작점 작은 순으로 정렬
    const sortedResult = result.sort((a, b) => a[0] - b[0]);
    // 겹치게 되면 모든 겹치는 구간 중 시작점의 최솟값, 도착점의 최댓값이 최종 겹치는 구간
    let start = [];
    let end = [];
    sortedResult.forEach((el) => {
      start.push(el[0]);
      end.push(el[1]);
    });
    answer = Math.max(...end) - Math.min(...start);
  }
  return answer;
}