// 문제 풀이
function solution(input) {
  const N = +input.shift();
  const arr = input.shift().split(' ').map(Number);
  const targetNode = +input.shift();

  // 노드 삭제
  const removeNode = (target) => {
    arr[target] = -2; // 삭제되면 -2로 부모 노드
    if (arr.find((el) => el === target) === undefined) {
      return;
    }
    for (let i = 0; i < N; i++) {
      if (arr[i] === target) {
        removeNode(i);
      }
    }
  };

  if (arr[targetNode] === -1) {
    console.log(0);
    return;
  }

  removeNode(targetNode);

  let res = 0;
  for (let i = 0; i < N; i++) {
    if (arr[i] === -2) continue;
    if (arr.find((el) => el === i) === undefined) {
      res++;
    }
  }

  console.log(res);
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
