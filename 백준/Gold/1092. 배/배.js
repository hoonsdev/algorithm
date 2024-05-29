// 문제 풀이
function solution(input) {
  const N = +input.shift();
  const crane = input
    .shift()
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a);
  const M = +input.shift();
  const weights = input
    .shift()
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a);

  if (crane[0] < weights[0]) {
    console.log(-1);
    return;
  }

  // 실제 배열 건들지 말고 인덱스로 "접근"만 하기
  // 크레인을 높은 순으로 정렬했기 때문에 전에 애가 못들면 다음 애도 못 든다.
  // 그래서 다음 애는 전에 애가 가능한거 이후로부터 탐색하면 됨
  let time = 0;
  let completed = 0;
  while (M > completed) {
    let cIdx = 0; // crane Idx
    for (let i = 0; i < M; i++) {
      if (crane[cIdx] >= weights[i]) {
        weights[i] = Infinity;
        cIdx++;
        completed++;
      }
    }
    time++;
  }
  console.log(time);
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
