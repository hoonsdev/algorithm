// 문제 풀이
function solution(input) {
  const [N, M] = input.shift().split(' ').map(Number);

  // 지도 생성
  const arr = [];
  for (let i = 0; i < M; i++) {
    const line = input.shift();
    arr.push(line);
  }

  // 방문한 곳 체크하기 위한 배열
  const visited = Array.from({ length: M }, () => new Array(N).fill(0));

  // 탐색을 위한 방향
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  // w, b 구간별? 길이 체크하기 위한 변수
  let wCount = 0;
  let bCount = 0;

  // dfs(이전 x, 이전 y, 이전 색상)
  const dfs = (cx, cy, bc) => {
    // 해당 좌표 방문 시 방문 체크 하고, 색상에 맞게 길이++
    visited[cy][cx]++;
    if (bc === 'W') wCount++;
    if (bc === 'B') bCount++;

    // 상하좌우 탐색, 범위 이내에 있는 것만, 이전 색상이랑 다음 색상이 같을 때에만 dfs 진행
    for (let i = 0; i < 4; i++) {
      const nx = cx + dirs[i][0];
      const ny = cy + dirs[i][1];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[ny][nx]) {
        if (bc === arr[ny][nx]) {
          dfs(nx, ny, arr[ny][nx]);
        }
      }
    }
  };

  // [w, b]
  const res = [0, 0];

  // 그냥 dfs 돌려버리면 한 점에 대해서만 하고 남은 점에 대해서 탐색을 안할수도 있으니까 for 문으로 모든 점에 대해 조사
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // 방문하지 않은 곳만
      if (!visited[j][i]) {
        dfs(i, j, arr[j][i]);
        // 시작점 색상에 따라 중간 구간 제곱해서 더해주고 0으로 초기화
        if (arr[j][i] === 'W') {
          res[0] += wCount * wCount;
          wCount = 0;
        }
        if (arr[j][i] === 'B') {
          res[1] += bCount * bCount;
          bCount = 0;
        }
      }
    }
  }
  console.log(res[0], res[1]);
}

// Readline module
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
