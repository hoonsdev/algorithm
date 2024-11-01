const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const N = +input[0]
const arr = input[1].split(' ').map(Number)
const M = +input[2]

// dp[i] = i원으로 만들 수 있는 가장 큰 방 번호
const dp = new Array(M + 1).fill("0")

for (let i = N - 1; i >= 0; i--) {
  const p = arr[i]
  for (let j = p; j < M + 1; j++) {
    let v = BigInt(i)
    let prev = BigInt(dp[j])
    let newV = BigInt(dp[j - p] + i)
    
    if (prev > v) v = prev
    if (newV > v) v = newV

    dp[j] = v.toString()
  }
}

console.log(dp[M])