// 문제 풀이
function solution(input) {
  const text = input.shift().split('')
  const alphabet = Array.from({length: 26}, () => 0)
  let result = 0

  text.map(el => {
    alphabet[el.charCodeAt() - 'a'.charCodeAt()]++
  })

  const dfs = (idx, temp, len) => {
    if (idx === len) {
      result++
      return
    }

    for (let i = 0; i < 26; i++) {
      // 남아있는 알파벳 없으면 넘어감
      if (!alphabet[i]) continue
      // temp가 빈 문자열이 아니고, temp의 마지막 문자가 현재 알파벳이랑 같으면 넘어감
      if (temp !== '' && temp[temp.length - 1] === String.fromCharCode(97 + i)) continue

      alphabet[i]--
      dfs(idx + 1, temp + String.fromCharCode(97 + i), len)
      alphabet[i]++
    }
  }

  dfs(0, "", text.length)

  console.log(result)
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
