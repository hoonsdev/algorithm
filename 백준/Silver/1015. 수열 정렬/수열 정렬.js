// 이런 풀이도 있음
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
// const N = +input[0];
// const A = input.slice(1).map(v => +v);
// const sortedA = A.slice().sort((a, b) => a-b);
// const P = Array(N).fill(-1);
// A.forEach((v, i) => {
//     P[i] = sortedA.findIndex((elem, idx) => {
//         if (elem === v && !(P.includes(idx))) return true;
//     });
// });
// console.log(P.join(" "));

// 문제 풀이
function solution(input) {
  const N = input[0];
  // 원본 배열에서의 숫자가 원본 배열에서 몇번째 index인지 확인하기 위해 idx도 추가
  const intA = input[1].split(' ').map((el, idx) => [parseInt(el), idx]);
  // 값이 같다면 원본 배열에서의 idx가 작은 순으로 정렬
  const sortedInput = intA.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] === b[0]) {
      if (a[1] < b[1]) {
        return -1;
      }
    }
  });
  let result = [];
  let temp = [];
  // 원본 배열의 숫자가 정렬된 배열에서 몇번째 인덱스인지가 답
  // temp: 정렬한 배열에서의 값의 원래 배열에서의 index
  sortedInput.forEach((el, idx) => {
    temp.push([el[1], idx]);
  });
  // temp2: 원래 배열에서의 index가 0, 1, 2, .... 순으로 나와있으니까 [원래 배열 idx, 정렬 배열의 idx]로 생성후 정렬 ... 원본 배열 0번째 idx는
  // 정렬 배열에서 몇번째 idx인지 알 수 있음!
  temp
    .sort((a, b) => {
      if (a[0] < b[0]) {
        return -1;
      }
    })
    .forEach((el) => result.push(el[1]));
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
