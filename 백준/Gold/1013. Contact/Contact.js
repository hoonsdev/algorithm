// 문제 풀이
function solution(input) {
  const T = +input.shift();
  for (let i = 0; i < T; i++) {
    const pattern = input.shift();
    // 정규표현식으로 체크
    // 이건 너무 편법 같은 ,,,
    if (/^(100+1+|01)+$/.test(pattern)) console.log('YES');
    else console.log('NO');
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