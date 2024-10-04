// 문제 풀이
function solution(input) {
  const N = +input.shift();
  const tallerThanMe = Array.from({ length: N + 1 });
  input
    .shift()
    .split(' ')
    .map((el, idx) => {
      tallerThanMe[idx + 1] = Number(el);
    });

  const answer = Array.from({ length: N + 1 }, () => 0);
  for (let i = 1; i < N + 1; i++) {
    let count = 0;
    const num = tallerThanMe[i];
    for (let j = 1; j < N + 1; j++) {
      // 나보다 큰 사람 수 만족하고 그 자리가 비어있을 때 그 자리 선택
      if (count === num && !answer[j]) {
        answer[j] = i;
        break;
      } else if (!answer[j]) {
        // 나보다 큰 사람 수 채울때까지 옆으로 이동
        count++;
      }
    }
  }
  console.log(answer.slice(1).join(' '));
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
