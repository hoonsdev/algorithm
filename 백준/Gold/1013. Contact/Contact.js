// 문제 풀이
function solution(input) {
  const T = +input.shift();

  const func = (pattern) => {
    // 문자열 처음부터 끝까지 탐색하기 위한 인덱스
    let idx = 0;
    // 인덱스가 문자열 내부일 경우까지만 반복
    while (idx < pattern.length) {
      // 0, 1 인 경우 나눠서 분리
      if (pattern[idx] === '1') {
        // 1 -> 뒤에 문자열은 00 무조건 와야함
        if (
          pattern[idx + 1] === '0' &&
          pattern[idx + 2] === '0' &&
          idx + 2 < pattern.length
        ) {
          idx += 3;
          // 그 뒤에 0 아닐때까지 idx 증가
          while (idx < pattern.length && pattern[idx] === '0') idx++;

          if (pattern[idx] === '1') idx++;
          else return false;

          // 만약 1이 나왔다면, 1이 연속으로 나오거나 100+1+ 패턴 반복되어야 함
          while (idx < pattern.length && pattern[idx] === '1') {
            if (
              pattern[idx + 1] === '0' &&
              pattern[idx + 2] === '0' &&
              idx + 2 < pattern.length
            ) {
              // 100+1+ 패턴 반복 -> 루프 탈출
              break;
            } else idx++;
          }
        } else return false;
      } else {
        // 0 -> 뒤에 무조건 1이 와야 함
        if (pattern[idx + 1] === '1') {
          idx += 2;
        } else return false;
      }
    }
    // 아무 제한 조건에 걸리지 않으면 그냥 true
    return true;
  };

  for (let i = 0; i < T; i++) {
    const pattern = input.shift();

    const res = func(pattern);

    console.log(!res ? 'NO' : 'YES');
  }
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
  solution(input);
  process.exit();
});
