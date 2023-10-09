// 문제 풀이
function totalOne(n) {
  let count = 0;
  while (n > 0) {
    if (n % 2 === 1) {
      count++;
    }
    n = Math.floor(n / 2);
  }
  return count;
}

function solution(input) {
  // default
  let answer = -1;
  const [N, K] = input[0].split(' ').map((el) => parseInt(el));
  const initialOne = totalOne(N); // N(2)에서 1의 개수
  let result = N;
  if (initialOne > K) {
    let count = 0;
    while (true) {
      result++;
      count++;
      if (totalOne(result) <= K) {
        break;
      }
    }
    answer = count;
  } else {
    answer = 0;
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

// 이벤트가 발생할 때 실행할 동작을 지정
// 입력 스트림에 줄바꿈을 나타내는 \n, \r, or \r\n 제어 문자가 나타나거나, 사용자가 Enter 또는 Return을 누를 때 발생
rl.on('line', (line) => {
  // readline interface를 통해 다룰 이벤트, 사용자가 콘솔에 입력을 할 때 발생
  // 엔터 키로 입력받은 여러 줄을 input 배열에 추가 [ [...], [...], ... [...] ] 이런 구조
  input.push(line);
});

// Readable 스트림 종료를 제어하는 이벤트
rl.on('close', () => {
  solution(input); // 문제 풀이 함수 호출
  process.exit();
});
