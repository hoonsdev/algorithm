// 문제 풀이
function solution(input) {
  let N = input.shift();
  // 첫번째 단어를 분리하여 테스트 케이스로 삼음
  let testCase = input[0].split('');
  // 테스트 거친 후 패턴을 입력할 배열
  let pattern = [];
  // 테스트 케이스 문자열의 길이만큼 반복
  for (let i = 0; i < testCase.length; i++) {
    // input의 모든 요소에 대해서 일치하는지를 체크할 isMatch
    let isMatch = 0;
    for (let j = 1; j < N; j++) {
      // input 배열의 길이만큼 반복
      // 즉, 테스트케이스의 0 index 글자에 대해 모든 input 배열 요소를 테스트, 1 index 테스트 ... 이런식으로 넘어감
      // input의 한 요소에 대해서 테스트 통과하면 isMatch 값 1 증가
      input[j].split('')[i] === testCase[i] ? isMatch++ : isMatch;
    }
    // isMatch가 N - 1(input배열 길이 - 테스트 케이스)과 같으면 i번째 testCase 글자 push, 다르면 ? push
    isMatch === N - 1 ? pattern.push(testCase[i]) : pattern.push('?');
  }
  console.log(pattern.join(''));
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
