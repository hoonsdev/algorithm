// 문제 풀이
function solution(input) {
  const [xs, ys] = input.shift().split(' ').map(Number);
  let [xe, ye, dx, dy] = input.shift().split(' ').map(Number);

  const getsDistance = (x, y) => (x - xs) ** 2 + (y - ys) ** 2;

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const gcdValue = gcd(dx, dy);
  dx /= gcdValue;
  dy /= gcdValue;

  while (getsDistance(xe, ye) > getsDistance(xe + dx, ye + dy)) {
    xe += dx;
    ye += dy;
  }

  console.log(xe, ye);
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
