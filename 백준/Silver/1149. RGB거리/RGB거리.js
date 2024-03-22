// 문제 풀이
function solution(input) {
  const N = +input.shift();

  const costInfo = Array.from({ length: N }, () => {
    for (let i = 0; i < N; i++) {
      const nthCost = input.shift().split(' ').map(Number);
      return nthCost;
    }
  });

  // dp -> 문제의 결과 값을 저장해두고 재사용
  // 어떤 기준으로 값을 저장할 것인지에 대한 생각을 해야함!
  // N번째 집을 r, g, b 색으로 칠하는데 드는 최소 비용
  for (let i = 1; i < N; i++) {
    const red = Math.min(costInfo[i - 1][1], costInfo[i - 1][2]);
    const green = Math.min(costInfo[i - 1][0], costInfo[i - 1][2]);
    const blue = Math.min(costInfo[i - 1][0], costInfo[i - 1][1]);
    costInfo[i] = [
      costInfo[i][0] + red,
      costInfo[i][1] + green,
      costInfo[i][2] + blue,
    ];
  }

  console.log(Math.min(...costInfo[N - 1]));
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
