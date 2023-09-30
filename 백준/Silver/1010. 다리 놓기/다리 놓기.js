// 문제 풀이
function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function solution(input) {
  const T = parseInt(input.shift());
  let result = [];
  input.forEach((el) => {
    let [N, M] = el.split(' ').map((el) => parseInt(el));
    // mCn 하면 됨
    if (N === M) {
      result.push(1);
      return;
    } else {
      let num = Math.round(factorial(M) / (factorial(N) * factorial(M - N)));
      result.push(num);
    }
  });
  console.log(result.join('\n'));
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
