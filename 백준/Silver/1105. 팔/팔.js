// 문제 풀이
function solution(input) {
  let answer = 0;
  const [L, R] = input[0].split(' ');
  // L R 의 자리수가 다르면 그 안에 무조건 8이 포함되지 않은 수 존재 -> 0
  if (L.length !== R.length) {
    answer = 0;
  } else {
    // L R 자리수 같으면 각 자리를 반복 돌면서 숫자가 같고, 그 값이 8일 때에만 answer++
    // 자리수가 같아도 둘다 8이 아니면 그 사이에 8이 아닌 자연수 존재하기 때문
    for (let i = 0; i < L.length; i++) {
      if (L[i] === R[i]) {
        if (L[i] === '8') {
          answer++;
        }
      } else {
        break;
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
