// 문제 풀이
function solution(input) {
  const N = +input.shift();
  const arr = input.shift().split(' ').map(Number);
  let S = +input.shift();

  // 앞일수록 큰 수가 와야되는 방향으로 정렬
  for (let i = 0; i < N; i++) {
    // S가 남아있지 않으면 정렬 ㄴㄴ
    if (!S) break;

    // S 만큼만 찾아볼 수 있으니까 범위 설정
    // 그 범위 내에 최대값과 그 최대값의 인덱스를 알아야함.
    // 최댓값을 현재 인덱스까지 끌어오고(교환하는 것), 인덱스를 하나 올려서 또 범위 내 최대값과 교환하는..
    let maxValue = Math.max(...arr.slice(i, i + S + 1));
    let maxIdx = arr.indexOf(maxValue);

    // maxIdx === i 일 때까지 끌어옴, S가 0이면 끌어온 만큼만 적용
    while (maxIdx !== i && S) {
      let temp;
      temp = arr[maxIdx - 1];
      arr[maxIdx - 1] = arr[maxIdx];
      arr[maxIdx] = temp;
      maxIdx--;
      S--;
    }
  }
  console.log(arr.join(' '));
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
