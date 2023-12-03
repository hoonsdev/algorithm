// 문제 풀이
function solution(input) {
  const bfs = (x, y, areaNum) => {
    const queue = [[x, y]];
    while (queue.length) {
      const [cx, cy] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nx = cx + dir[i][0];
        const ny = cy + dir[i][1];

        if (nx >= 0 && ny >= 0 && nx < N && ny < M && map[ny][nx] === 0) {
          map[ny][nx] = areaNum;
          queue.push([nx, ny]);
        }
      }
    }
  };

  let areaCount = 1;
  let areaList = [];
  const [M, N, K] = input
    .shift()
    .split(' ')
    .map((el) => parseInt(el));
  const map = Array.from({ length: M }, () => new Array(N).fill(0));
  for (let i = 0; i < K; i++) {
    const [bx, by, tx, ty] = input
      .shift()
      .split(' ')
      .map((el) => parseInt(el));
    // console.log(bx, by, tx, ty);
    // map 돌면서 사각형 색칠하기
    for (let j = by; j < ty; j++) {
      for (let k = bx; k < tx; k++) {
        map[j][k] = 1;
      }
    }
  }

  // 방향
  const dir = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === 0) {
        areaCount++;
        map[i][j] = areaCount;
        bfs(j, i, areaCount);
      }
    }
  }

  for (let i = 2; i <= areaCount; i++) {
    let answer = 0;
    map.forEach((row) => {
      row.forEach((cell) => {
        if (cell === i) answer++;
      });
    });
    areaList.push(answer);
  }

  console.log(areaCount - 1);
  console.log(areaList.sort((a, b) => a - b).join(' '));
}

// Readline module
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

// 이벤트가 발생할 때 실행할 동작을 지정
// 입력 스트림에 줄바꿈을 나타내는 \n, \r, or \r\n 제어 문자가 나타나거나, 사용자가 Enter 또는 Return을 누를 때 발생
rl.on('line', (line) => {
  // readline interface를 통해 다룰 이벤트, 사용자가 콘솔에 입력을 할 때 발생
  // 엔터 키로 입력받은 여러 줄을 input 배열에 추가 [ [...], [...], ... [...] ] 이런 구조
  input.push(line);
});

// Readable 스트림 종료를 제어하는 이벤트
rl.on('close', () => {
  solution(input); // 문제 풀이 함수 호출
  process.exit();
});
