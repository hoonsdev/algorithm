// 문제 풀이
function solution(input) {
  const compare = (arr, count) => {
    for (let i = 0; i < N - 1; i++) {
      if (arr[i] !== targetArr[i]) {
        count++;
        arr[i] = 1 - arr[i];
        arr[i + 1] = 1 - arr[i + 1];
        if (i !== N - 2) {
          arr[i + 2] = 1 - arr[i + 2];
        }
      }
    }
    if (arr[N - 1] !== targetArr[N - 1]) return -1;
    else return count;
  };

  const N = Number(input.shift());
  let firstArr = input.shift().split('').map(Number);
  let targetArr = input.shift().split('').map(Number);

  let secondArr = [...firstArr];
  secondArr[0] = 1 - secondArr[0];
  secondArr[1] = 1 - secondArr[1];

  let answer = [];
  answer.push(compare(firstArr, 0));
  answer.push(compare(secondArr, 1));

  answer.every((el) => el === -1)
    ? console.log(-1)
    : console.log(Math.min(...answer.filter((el) => el !== -1)));
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
