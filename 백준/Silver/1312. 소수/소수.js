// 문제 풀이
// function getDigit(numerator, denominator, n) {
//   let result = [];
//   if (numerator % denominator > denominator) {
//     getDigit(numerator % denominator, denominator, n);
//   } else {
//     result.push(numerator);
//     for (let i = 1; i < n; i++) {
//       result[0] = (result[0] * 10) % denominator;
//       // i 가 n - 1일 때 result[0]가 N번째 소수점 자리 수
//       if (i === n - 1) {
//         return Math.floor((result[0] * 10) / denominator) || 0;
//       }
//     }
//   }
// }

function solution(input) {
  const [A, B, N] = input[0].split(' ').map((el) => parseInt(el));
  let result = A % B;
  for (let i = 1; i < N; i++) {
    result = (result * 10) % B;
  }
  console.log(Math.floor((result * 10) / B));
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
