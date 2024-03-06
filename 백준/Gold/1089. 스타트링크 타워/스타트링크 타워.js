// 문제 풀이
function solution(input) {
  const N = +input.shift();

  // 0 ~ 9 까지 #, . 으로 표시 -> 배열에서의 인덱스가 실제 숫자
  const nums = [
    '####.##.##.####',
    '..#..#..#..#..#',
    '###..#####..###',
    '###..####..####',
    '#.##.####..#..#',
    '####..###..####',
    '####..####.####',
    '###..#..#..#..#',
    '####.#####.####',
    '####.####..####',
  ];

  // input이 무슨 숫자를 나타내고 있는지 확인해야함.
  const arr = Array.from(Array(N), () => []);

  for (let i = 0; i < 5; i++) {
    let line = input.shift();
    for (let j = 0; j < N; j++) {
      const add = line.slice(0, 3);
      line = line.split('').splice(4, line.length).join('');
      arr[j].push(add);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].join('');
  }

  // 각 자리수가 나타낼 수 있는 수들 배열. 처음에는 0~9까지 모두 가능하다고 생각
  let result = Array.from({ length: N }, () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  // 분석
  arr.map((digit, idx) => {
    digit.split('').map((el, idx2) => {
      // el => input 의 # or .
      // 이 자리에 전구가 들어와 있을 때 만들 수 있는 숫자를 담는 배열
      const possible = [];
      if (el === '#') {
        // 0~9를 #, . 으로 표현한 배열 중에 해당 자리에 # 있는 수를 모두 선택
        nums.map((num, idx3) => {
          if (num[idx2] === el) {
            possible.push(idx3);
          }
        });
        // 각 자리가 나타낼 수 있는 기본값(0~9) 와 구한 가능한 수의 교집합을 다시 각 자리 나타낼 수 있는 수로 설정
        const intersection = result[idx].filter((num) =>
          possible.includes(num)
        );
        result[idx] = intersection;
      }
    });
  });

  // 결과 도출
  let total = 0;
  let cases = 1;
  result.map((el, idx) => {
    let sum = 0;
    // 하나라도 빈배열이 있으면 숫자 생성 불가 => -1
    if (!el.length) {
      total = -1;
      return;
    }
    el.map((el2) => {
      let dd = 1;
      for (let i = 0; i < N; i++) {
        if (i !== idx) {
          dd *= result[i].length;
        }
      }
      sum += el2 * dd;
    });
    cases *= el.length;
    total += Math.pow(10, N - 1 - idx) * sum;
  });
  let answer = total === -1 ? -1 : parseFloat((total / cases).toFixed(6));
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
