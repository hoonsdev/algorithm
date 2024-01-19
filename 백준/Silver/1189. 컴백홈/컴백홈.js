// 문제 풀이
function solution(input) {
  const [R, C, K] = input.shift().split(' ').map(Number);
  // map 생성
  const mapArr = [];
  for (let i = 0; i < R; i++) {
    mapArr[i] = input.shift().split('');
  }

  // 마지막 위치
  mapArr[R - 1][0] = 'S';
  mapArr[0][C - 1] = 'E';

  // 방향
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  // 방문한 곳 체크
  const visited = Array.from({ length: R }, () => new Array(C).fill(0));

  let answer = 0;

  // dfs
  function dfs(r, c, length) {
    // 4 방향에 대해 탐색
    dirs.forEach((dir) => {
      // 다음 위치
      const nr = r + dir[0];
      const nc = c + dir[1];

      // 일반적인 상황 :: 다음 좌표가 맵 안에 있고, 막혀있는 위치가 아니고 방문한 곳이 아닐 때 방문
      if (
        nr >= 0 &&
        nr < R &&
        nc >= 0 &&
        nc < C &&
        mapArr[nr][nc] !== 'T' &&
        mapArr[nr][nc] !== 'S' &&
        !visited[nr][nc]
      ) {
        // 마지막 지점에 도달하고 길이가 K 인 경우 dfs 종료
        if (mapArr[nr][nc] === 'E' && length + 1 === K) {
          answer++;
          return;
        } else {
          visited[nr][nc] = 1;
          dfs(nr, nc, length + 1);
          visited[nr][nc] = 0;
        }
      }
    });
  }

  // 탐색
  dfs(R - 1, 0, 1);
  console.log(answer);
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
  solution(input); // 문제 풀이 함수 호출
  process.exit();
});
