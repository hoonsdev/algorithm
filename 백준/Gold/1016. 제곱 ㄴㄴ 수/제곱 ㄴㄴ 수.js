const solution = (input) => {
  const [min, max] = input[0].split(' ').map(BigInt);
  const arr = new Array(Number(max - min + 1n)).fill(0);
  let count = 0;

  for (let i = 2n; i ** 2n <= max; i++) {
    let start = (min / i ** 2n) * i ** 2n;
    if (start < min) start += i ** 2n;

    for (let j = start; j <= max; j += i ** 2n) {
      if (!arr[Number(j - min)]) {
        arr[Number(j - min)] = 1;
        count++;
      }
    }
  }

  console.log(Number(max - min + 1n - BigInt(count)));
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
