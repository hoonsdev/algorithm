const solution = (input) => {
  const [min, max] = input[0].split(' ').map(Number);
  const sMax = Math.floor(max ** 0.5);
  const arr = new Array(max - min + 1).fill(0);
  let count = 0;

  // i는 제곱수 만들 숫자
  for (let i = 2; i <= sMax + 1; i++) {
    for (let j = Math.ceil(min / i ** 2) * i ** 2; j <= max; j += i ** 2) {
      if (!arr[j - min]) {
        arr[j - min] = 1;
        count++;
      }
    }
  }

  console.log(max - min + 1 - count);
};

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
