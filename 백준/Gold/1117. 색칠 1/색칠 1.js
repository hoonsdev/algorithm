function solution(input) {
  const [W, H, f, c, x1, y1, x2, y2] = input.shift().split(' ').map(BigInt);

  const minF = BigInt(Math.min(Number(f), Number(W - f))); // 겹치는 영역의 x 좌표
  let answer = W * H;

  const totalRectArea = (x2 - x1) * (y2 - y1);
  let overlapArea = 0n;

  if (x1 >= minF) {
    overlapArea = (c + 1n) * totalRectArea;
  } else if (x1 < minF && x2 > minF) {
    const leftPart = (minF - x1) * (y2 - y1);
    const rightPart = (x2 - minF) * (y2 - y1);
    overlapArea = (c + 1n) * (2n * leftPart + rightPart);
  } else {
    overlapArea = (c + 1n) * 2n * totalRectArea;
  }

  answer -= overlapArea;
  console.log(answer.toString());
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
