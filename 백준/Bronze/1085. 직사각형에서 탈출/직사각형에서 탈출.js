const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  // const [x, y, w, h] = line.split(' ').map((el) => parseInt(el));
  let input = [];
  line.split(' ').forEach((el) => {
    input.push(parseInt(el));
  });
  const [x, y, w, h] = input;
  const distance = [x, w - x, y, h - y];
  let minLen = x;
  distance.forEach((el) => {
    if (el < minLen) {
      minLen = el;
    }
  });
  console.log(minLen);
  rl.close();
});

rl.on('close', () => {
  process.exit();
});
