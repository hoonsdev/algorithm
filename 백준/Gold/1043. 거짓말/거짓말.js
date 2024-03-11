// 문제 풀이
function solution(input) {
  const [N, M] = input.shift().split(' ').map(Number);
  const [numOfTrue, ...trueArr] = input.shift().split(' ').map(Number);
  const parents = Array.from({ length: N + 1 });

  let answer = M;

  const findParent = (x) => {
    if (parents[x] === x) return x;
    return (x = findParent(parents[x]));
  };

  const union = (x, y) => {
    x = findParent(x);
    y = findParent(y);
    parents[x] = y;
  };

  // 처음에는 자기 자신이 부모 노드
  for (let i = 1; i <= N; i++) {
    parents[i] = i;
  }

  // 이 과정을 통해 같은 파티면 같은 부모 노드를 갖게 해줌(union)
  for (let i = 0; i < M; i++) {
    const [num, ...party] = input[i].split(' ').map(Number);
    const parent = party[0];
    if (num >= 2) {
      for (let j = 1; j < num; j++) {
        union(party[j], parent);
      }
    }
  }

  // 파티에 온 사람들과 진실을 알고 있는 사람들의 부모 노드 비교
  // 같은 부모노드이면 진실을 알고 있는 그룹이므로 그 파티는 가지 못함.
  for (let i = 0; i < M; i++) {
    const [num, ...party] = input.shift().split(' ').map(Number);
    for (const el of party) {
      let flag = true;

      for (const el2 of trueArr) {
        if (findParent(el) === findParent(el2)) {
          answer--;
          flag = false;
          break;
        }
      }

      if (!flag) break;
    }
  }

  console.log(numOfTrue === 0 ? M : answer);
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
