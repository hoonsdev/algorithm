// 문제 풀이
function solution(input) {
  const [N, r, c] = input.shift().split(' ').map(Number);

  // 2^N * 2^N 2차원 배열

  let count = 0;
  let answer = 0;
  // 재귀적으로 탐색
  const dfs = (cr, cc, size) => {
    if (cr === r && cc === c) {
      answer = count;
      return;
    }

    if (cr <= r && r < cr + size && cc <= c && c < cc + size) {
      // 현재 r, c 좌표의 박스? 내부에 실제 r, c 있을 때
      // 박스 4등분으로 쪼개고 각 박스의 왼쪽 위 지점을 시작으로 dfs 모두 돌려줌
      size /= 2;
      dfs(cr, cc, size);
      dfs(cr, cc + size, size);
      dfs(cr + size, cc, size);
      dfs(cr + size, cc + size, size);
    } else {
      // 다른 박스에 있으면 박스 이동해야 하니까 박스 사이즈를 더해줌
      count += size ** 2;
    }
  };

  dfs(0, 0, 2 ** N);
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
  solution(input);
  process.exit();
});
