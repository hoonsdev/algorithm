function solution(input) {
  const [N, D] = input.shift().split(' ').map(Number);
  const shortcut = [];

  for (let i = 0; i < N; i++) {
    shortcut.push(input.shift().split(' ').map(Number));
  }

  shortcut.sort((a, b) => a[0] - b[0]);

  const dp = Array.from({ length: D + 1 }, (_, idx) => idx);

  let k = 0;
  for (let i = 0; i <= D; i++) {
    // 전 칸에서 현재 칸으로 올 때 걸리는 최소 거리 갱신
    if (i > 0) dp[i] = Math.min(dp[i - 1] + 1, dp[i]);

    // 지름길 확인
    while (k < N) {
      if (i === shortcut[k][0]) {
        if (shortcut[k][1] <= D) {
          dp[shortcut[k][1]] = Math.min(
            dp[i] + shortcut[k][2],
            dp[shortcut[k][1]]
          );
        }
        k++;
      } else {
        break;
      }
    }
  }

  console.log(dp[D]);
}

// Readline module to handle input
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
