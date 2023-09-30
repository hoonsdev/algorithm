// 문제 풀이
function solution(input) {
  let X = parseInt(input[0]);
  let count = 0;
  while (X > 0) {
    if (X % 2) {
      // 0 아니면 1인데 1이면 더 구해봐야함
      count++;
    }
    X = parseInt(X / 2);
  }
  count = count <= 0 ? 1 : count;
  console.log(count);
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
