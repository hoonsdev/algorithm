// 문제 풀이
function solution(input) {
  const N = parseInt(input.shift());

  const decreasingNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const func = (num) => {
    // 새로 생성한 수가 9876543210 이상이면 감소하는 수 불가 -> 재귀 종료
    if (parseInt(num) >= 9876543210) return;
    // 이전 수의 마지막 자리수보다 작은 수를 계속해서 이어붙여야 감소하는 수 가능
    // 마지막 자리수보다 작은 범위 내에서 재귀적으로 감소하는 수 생성해서 감소수 배열에 넣어준다.
    const last = parseInt(num) % 10;
    for (let i = 0; i < last; i++) {
      const newNum = num + i;
      decreasingNums.push(parseInt(newNum));
      func(newNum);
    }
  };

  if (N === 0) {
    console.log(0);
    return;
  } else if (N <= 10) {
    console.log(N);
    return;
  }

  // 감소하는 수 일단 생성하고, N번째 감소하는 수 찾으면 됨
  for (let i = 0; i < 10; i++) {
    func(`${i}`);
  }

  decreasingNums.sort((a, b) => a - b);
  console.log(parseInt(decreasingNums[N]) || -1);
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
