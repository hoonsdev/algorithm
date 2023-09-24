// N개의 정수가 주어지면, 이 정수들의 합 S의 부호를 구하는 프로그램을 작성하시오.
// 문제 풀이
function solution(input) {
  // 영식: 30초마다 10원
  // 민식: 60초마다 15원
  // 통화 시간 목록 공백 기준으로 분리
  let [num, timeList] = input;
  num = parseInt(num);
  timeList = timeList.split(' ').map((el) => {
    return parseInt(el);
  });
  let sumY = 0,
    sumM = 0;
  let result = [];
  for (i = 0; i < num; i++) {
    sumY += (Math.floor(timeList[i] / 30) + 1) * 10;
    sumM += (Math.floor(timeList[i] / 60) + 1) * 15;
  }
  if (sumY > sumM) {
    result.push('M');
    result.push(sumM);
  } else if (sumY < sumM) {
    result.push('Y');
    result.push(sumY);
  } else {
    result.push('Y M');
    result.push(sumY);
  }
  console.log(result.join(' '));
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
