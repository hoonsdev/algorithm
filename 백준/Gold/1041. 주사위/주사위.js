// 문제 풀이
function solution(input) {
  let answer;
  const N = +input[0];
  const [A, B, C, D, E, F] = input[1].split(' ').map((el) => parseInt(el));

  // A~F 중 최솟값
  const minVal = Math.min(...[A, B, C, D, E, F]);
  const maxVal = Math.max(...[A, B, C, D, E, F]);

  // 마주보는 면에 대한 계산
  const AF = [A, F];
  const BE = [B, E];
  const CD = [C, D];
  // 마주보는 면에 두 수가 있는데 두개의 수 중 최솟값
  const minAF = Math.min(...AF);
  const minBE = Math.min(...BE);
  const minCD = Math.min(...CD);
  // 3개의 묶음 중 최소 2개 고르기 위한 sort
  const [one, two] = [minAF, minBE, minCD].sort((a, b) => a - b).slice(0, 2);

  if (N === 1) {
    answer = A + B + C + D + E + F - maxVal;
  } else {
    answer =
      4 * (minAF + minBE + minCD) +
      (8 * N - 12) * (one + two) +
      (4 * (N - 1) * (N - 2) + (N - 2) ** 2) * minVal;
  }
  console.log(answer.toString());
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
