function solution(dots) {
  var answer = 0;
  // 이건 6가지 경우,, 문제 조건은 3가지 케이스만 나옴
  // for (let j = 0; j < n; j++) {
  //   for (let i = j + 1; i < n; i++) {
  //     let curSlope = (dots[j][1] - dots[i][1]) / (dots[j][0] - dots[i][0]);
  //     slope.includes(curSlope) ? (answer = 1) : slope.push(curSlope);
  //   }
  // }
  const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
  (y2 - y1) / (x2 - x1) === (y4 - y3) / (x4 - x3) ? (answer = 1) : answer;
  (y3 - y1) / (x3 - x1) === (y4 - y2) / (x4 - x2) ? (answer = 1) : answer;
  (y4 - y1) / (x4 - x1) === (y3 - y2) / (x3 - x2) ? (answer = 1) : answer;
  return answer;
}
