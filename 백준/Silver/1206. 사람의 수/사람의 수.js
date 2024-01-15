// 문제 풀이
function solution(input) {
  const N = +input.shift();
  // 사람의 수 1 ~ 1000명 사이
  let target = 1;
  while (target <= 1000) {
    // count === N 이면 모든 입력값이 조건을 만족하는 target 사람 수 찾은 것
    let count = 0;
    for (let i = 0; i < N; i++) {
      // binary search
      let start = 0;
      let end = target * 10;
      while (end - start >= 0) {
        let mid = Math.floor((start + end) / 2);
        let average = Math.floor((mid * 1000) / target);

        if (average === +input[i].split('.').join('')) {
          count++;
          break;
        } else if (average > +input[i].split('.').join('')) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
    }

    if (count === N || target === 1000) {
      break;
    } else {
      target++;
    }
  }
  console.log(target);
}

// Readline module
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  solution(input); // 문제 풀이 함수 호출
  process.exit();
});
