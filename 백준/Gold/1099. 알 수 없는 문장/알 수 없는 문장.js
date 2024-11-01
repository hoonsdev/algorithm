 const input = require('fs')
   .readFileSync('/dev/stdin')
   .toString()
   .trim()
   .split('\n')

const s = input[0]
const N = +input[1]

const words = Array.from({length: 51}, () => []) // words[i]: 길이가 i인 단어 배열
for (let i = 2; i < N + 2; i++) {
  const w = input[i]
  words[w.length].push(w)
}

const dp = new Array(s.length + 1).fill(Infinity) // dp[i]: i번째 인덱스 전까지의 문장 자른거를 단어들로 조합했을 때 비용의 최솟값
dp[0] = 0

const countCost = (s, d) => {
  let count = 0

  const sm = new Map()
  const dm = new Map()

  // 단어사전에 있는 단어 길이만큼 타겟 단어랑 비교
  // 해당 알파벳 나오면 Map에 등록
  for (let i = 0; i < s.length; i++) {
    sm.set(s[i], sm.get(s[i]) + 1 || 1)
    dm.set(d[i], dm.get(d[i]) + 1 || 1)
    if (s[i] !== d[i]) count++
  }

  // 알파벳 구성이 동일한지 확인
  for (let key of sm.keys()) {
    if (sm.get(key) !== dm.get(key)) return -1
  }

  return count
}

for (let i = 0; i < s.length; i++) {
  for (let j = 1; j < 51; j++) {
    if (i + j > s.length) break
    for (let word of words[j]) {
      const cost = countCost(word, s.slice(i, i + word.length))
      if (cost === -1) continue
      dp[i + j] = Math.min(dp[i + j], dp[i] + cost)
    }
  }
}

console.log(dp[s.length] !== Infinity ? dp[s.length] : -1)