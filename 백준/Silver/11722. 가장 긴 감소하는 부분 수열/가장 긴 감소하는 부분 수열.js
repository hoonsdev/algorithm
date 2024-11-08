const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const N = +input[0]
const arr = input[1].split(' ').map(Number)

const dp = new Array(N + 1).fill(1)

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] > arr[i]) {
      // 감소하는 조건에 해당
      dp[i] = Math.max(dp[i], dp[j] + 1)
    }
  }
}

console.log(Math.max(...dp))