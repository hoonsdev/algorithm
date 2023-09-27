// 문제 풀이
function solution(input) {
  // 테스트 케이스의 개수 T
  const T = parseInt(input[0]);
  for (i = 0; i < T; i++) {
    let [a, b] = input[i + 1].split(' ').map((el) => parseInt(el));
    // 마지막 한자리 초기값 설정
    let last = a % 10;
    // 이미 처음에 a^0 가 설정된 셈이니까, 1부터 루프를 돌아 b-1번 반복 => 최종에서는 들어가는 last가 a^b-1 의 나머지
    // 최종에서는 a 곱해주고 나머지를 구하니까 결국 a^b의 나머지 구하는 셈이다
    for (j = 1; j < b; j++) {
      last = last * a;
      last = last % 10;
    }
    // 총 데이터 수를 10으로 나눈 나머지가 마지막 데이터가 처리될 컴퓨터의 번호
    console.log(last === 0 ? 10 : last);
  }
  // console.log(input);
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
