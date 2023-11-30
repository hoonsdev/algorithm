// 문제 풀이
function solution(input) {
  const T = parseInt(input.shift());
  // 방향
  const dir = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let t = 0; t < T; t++) {
    // bfs
    const bfs = (x, y) => {
      // 다음 방문할 위치 저장할 큐 -> 0, 0 부터 탐색 (큐는 bfs 내부적으로 선언해주기!)
      const queue = [[x, y]];
      while (queue.length) {
        const [cx, cy] = queue.shift();
        for (let i = 0; i < 4; i++) {
          const nx = cx + dir[i][0];
          const ny = cy + dir[i][1];

          if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
            if (map[ny][nx] === 1 && !visited[ny][nx]) {
              queue.push([nx, ny]);
              visited[ny][nx] = 1;
            }
          }
        }
      }
    };

    let answer = 0;
    const [M, N, K] = input
      .shift()
      .split(' ')
      .map((el) => parseInt(el));
    const map = Array.from({ length: N }, () => new Array(M).fill(0));
    for (let i = 0; i < K; i++) {
      const [x, y] = input.shift().split(' ');
      map[y][x] = 1;
    }

    // 방문한 곳 체크
    const visited = Array.from({ length: N }, () => new Array(M).fill(0));

    // 탐색
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (map[i][j] === 1 && !visited[i][j]) {
          answer++;
          visited[i][j] = 1;
          bfs(j, i);
        }
      }
    }

    console.log(answer);
  }
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
