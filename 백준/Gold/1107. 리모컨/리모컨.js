// 문제 풀이
function solution(input) {
  const N = +input.shift();
  const M = +input.shift();
  const broken = M ? input.shift().split(' ').map(Number) : [];

  if (N === 100) return console.log(0);

  let answer = Math.abs(100 - N);

  for (let i = 0; i < 1000000; i++) {
    const str = i.toString();
    let isValid = true;

    for (let j = 0; j < str.length; j++) {
      if (broken.includes(+str[j])) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      answer = Math.min(answer, Math.abs(i - N) + str.length);
    }
  }

  console.log(answer);
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
