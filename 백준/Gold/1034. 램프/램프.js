// 문제 풀이
function solution(input) {
  const [N, M] = input.shift().split(' ').map(Number);
  const K = +input.pop();
  const table = input.map((row) => row.split('').map(Number));

  let max = 0;
  // 각 행을 순회하면서 조건에 맞는 행이면, 그 행과 같은 형태의 다른 행의 개수를 센다.
  // 여기서 조건은 1. 행의 0의 개수가 K보다 작거나 같고 2. 0의 개수와 K가 모두 짝수/홀수 여야 함.
  // 2번 조건은 만약 0이 4개고, K가 5면 0을 모두 1로 만들어도 하나를 더 바꿔야 함. 그럼 무조건 하나가 꺼지니까 이 조건을 만족해야함.
  for (let i = 0; i < N; i++) {
    const countOff = table[i].filter((el) => !el).length;
    if (countOff > K || countOff % 2 !== K % 2) continue;
    let count = 1;
    for (let j = i + 1; j < N; j++) {
      if (JSON.stringify(table[i]) === JSON.stringify(table[j])) count++;
    }
    max = Math.max(max, count);
  }

  console.log(max);
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
