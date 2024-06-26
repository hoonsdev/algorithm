// 문제 풀이
function solution(input) {
  const N = +input.shift();

  // N이 0일 때, 1일 때
  let dp = [1, 3];

  // 기존 행에서 아무것도 선택하지 않는 경우는 새로운 행에서 선택할 때
  // 아무것도 선택하지 않는 경우, 왼쪽, 오른쪽 둘 중 하나만 선택하는 경우 모두 추가될 수 있음.
  // 왼쪽만 선택했다면 다음 행에서는 선택 안하거나 오른쪽만 가능
  // 오른쪽 경우에는 선택 x 거나 왼쪽만
  // 그래서 점화식이 이렇게 됨
  for (let i = 2; i <= N; i++) {
    dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
  }
  console.log(dp[N]);
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
