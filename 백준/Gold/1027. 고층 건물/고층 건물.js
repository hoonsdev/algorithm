// 문제 풀이
function solution(input) {
  // 기울기 계산
  const calculateSlope = (s, e) => {
    const dy = heightArr[s] - heightArr[e];
    const dx = s - e;
    const slope = dy / dx;
    return slope;
  };

  const N = +input.shift();
  const heightArr = input.shift().split(' ').map(Number);

  // 건물 1개면 0
  if (heightArr.length === 1) {
    console.log(0);
    return;
  }

  // 건물이 2개 이상
  const result = [];
  let count;
  for (let i = 0; i < N; i++) {
    // 바로 옆에서 보이는 건물은 무조건 세주기
    if (i === 0 || i === N - 1) {
      count = 1;
    } else {
      count = 2;
    }

    // 왼쪽 탐색
    let leftSlopeMax = calculateSlope(i, i - 1);
    for (let j = i - 1; j >= 0; j--) {
      if (leftSlopeMax > calculateSlope(i, j)) {
        leftSlopeMax = calculateSlope(i, j);
        count++;
      }
    }

    // 오른쪽 탐색
    let rightSlopeMax = calculateSlope(i, i + 1);
    for (let k = i + 1; k < N; k++) {
      if (rightSlopeMax < calculateSlope(i, k)) {
        rightSlopeMax = calculateSlope(i, k);
        count++;
      }
    }

    result.push(count);
  }
  // 결과에서 최댓값 출력
  console.log(Math.max(...result));
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  solution(input);
  process.exit();
});
