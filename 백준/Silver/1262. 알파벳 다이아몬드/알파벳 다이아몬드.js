// 문제 풀이
function solution(input) {
  const [N, R1, C1, R2, C2] = input.shift().split(' ').map(Number);
  const tileSize = 2 * N - 1;

  // 마름모의 성질 이용
  // 마름모 중심으로부터 같은 거리에 있는 점들은 같은 문자

  // 목표 좌표를 타일 내부에서의 좌표로 바꿀 수 있음
  // 몇번째 타일에서의 x, y 좌표 이런 식으로,,
  // 그 좌표가 중심으로부터 얼마만큼 떨어져 있는지 계산해서 출력해주면 된다.

  const aNum = 'a'.charCodeAt();

  for (let i = R1; i <= R2; i++) {
    let res = '';
    for (let j = C1; j <= C2; j++) {
      // 좌표를 타일 내부의 좌표로 환산
      const r = i % tileSize;
      const c = j % tileSize;
      // 타일 내부의 중심에서 해당 좌표까지의 거리 계산
      const dis = Math.abs(N - 1 - r) + Math.abs(N - 1 - c);
      // N = 2 일 때 거리가 2인 좌표는 . 으로 되어있음
      res += dis >= N ? '.' : String.fromCharCode((dis % 26) + aNum);
    }
    console.log(res);
  }
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
