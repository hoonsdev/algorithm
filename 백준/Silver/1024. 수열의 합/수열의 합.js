const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, L] = input[0].split(" ").map((el) => +el);
let answer = [];

// i의 최소 수는 L로 시작하며, L은 최대 100의 수를 가질 수 있기때문에 i<=100 이 됨
for (let i = L; i <= 100; i++) {
  // N = (x+1) + ... + (x+i) 을 만족하는 x를 구하는 공식
  let x = N - (i * (i + 1)) / 2;

  // x가 정수이면
  if (x % i === 0) {
    // x의 값 구하고
    x = x / i;

    // x가 음의 정수가 아니라면
    // N = (x+1) + (x+2) + ... (x+i) 를 만족하는 수들을 answer에 넣기
    if (x >= -1) {
      for (let j = 1; j < i + 1; j++) answer.push(x + j);
      break;
    }
  }
}

if (answer.length === 0) answer.push(-1);
console.log(answer.join(" "));