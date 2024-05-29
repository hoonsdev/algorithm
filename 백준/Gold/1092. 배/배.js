// 문제 풀이
function solution(input) {
  const N = +input.shift();
  const crane = input.shift().split(' ').map(Number);
  const M = +input.shift();
  const weights = input
    .shift()
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a);

  const craneMax = Math.max(...crane);
  const weightMax = weights[0];

  if (craneMax < weightMax) {
    console.log(-1);
    return;
  }

  let time = 0;
  while (weights.length) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (crane[i] >= weights[j]) {
          weights.splice(j, 1);
          break;
        }
      }
    }
    time++;
  }
  console.log(time);
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
