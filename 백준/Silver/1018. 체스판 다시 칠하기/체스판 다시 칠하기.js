// 문제 풀이\
function solution(input) {
  // 다른 것 개수 체크하는 함수
  function check(x, y) {
    // chess1: count1, chess2: count2 로 다른 것 개수 체크
    let count1 = 0;
    let count2 = 0;
    for (let i = x; i < x + 8; i++) {
      for (let j = y; j < y + 8; j++) {
        input[i][j] !== chess1[i - x][j - y] ? count1++ : count1;
        input[i][j] !== chess2[i - x][j - y] ? count2++ : count2;
      }
    }
    // 둘중에 작은걸 push
    result.push(Math.min(count1, count2));
  }
  const [N, M] = input.shift().split(' ');
  const intN = parseInt(N);
  const intM = parseInt(M);
  // 정답 체스판 2개
  const chess1 = [
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
  ];
  const chess2 = [
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
  ];
  let result = [];
  // 보드에서 체스판으로 볼 범위 설정
  for (let i = 0; i <= intN - 8; i++) {
    for (let j = 0; j <= intM - 8; j++) {
      check(i, j);
    }
  }
  // 모든 다시 칠해야 하는 정사각형 개수 중 최솟값 구하기
  console.log(Math.min(...result));
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
