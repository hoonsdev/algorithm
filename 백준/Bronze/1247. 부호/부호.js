const sum = () => {
  const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(BigInt);
  const len = input.length;
  let ans = [];
  for (let i = 0; i < len; i++) {
    const n = Number(input[i]);
    let sum = BigInt(0);
    i++;
    for (let j = 0; j < n; j++) {
      sum += BigInt(input[i]);
      i++;
    }
    i--;
    ans.push(sum < 0 ? "-" : sum > 0 ? "+" : "0");
  }
  console.log(ans.join("\n"));
};

sum();