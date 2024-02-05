// 문제 풀이
function solution(input) {
  const [N, M] = input.shift().split(' ').map(Number);

  let board = [];
  for (let i = 0; i < N; i++) {
    board.push(input.shift().split(''));
  }

  // 완전 제곱수 체크 함수
  const sqrt = (S) => {
    S = parseInt(S);
    return parseInt(Math.pow(S, 0.5)) ** 2 === S;
  };

  let answer = -1;

  // 탐색
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // 행, 열의 등차
      for (let row_d = -N; row_d < N; row_d++) {
        for (let col_d = -M; col_d < M; col_d++) {
          let S = '';
          let x = i,
            y = j;

          // 등차가 0인 경우 변화 없으므로 루프 탈출
          if (row_d === 0 && col_d === 0) {
            continue;
          }

          // 좌표가 board 내부일 때까지만 반복
          while (0 <= x && x < N && 0 <= y && y < M) {
            S += board[x][y];

            // 이어붙힌 결과가 완전제곱수라면 더 큰 값으로 정답 업데이트
            if (sqrt(S)) {
              answer = Math.max(answer, parseInt(S));
            }

            x += row_d;
            y += col_d;
          }
        }
      }
    }
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
