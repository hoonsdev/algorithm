// 문제 풀이
function solution(input) {
  // 모든 경우 탐색하는 dfs
  const dfs = (idx, multi, plus, cnt) => {
    // 배열의 끝 지점까지 탐색 후 값 비교
    if (idx === ingredientArr.length) {
      if (cnt && Math.abs(multi - plus) < answer) {
        answer = Math.abs(multi - plus);
      }
      return;
    }
    // 일반적인 상황에서는, 배열의 해당 idx 요소를 포함해서 경로를 짤건지, 아닐건지 경우가 나옴
    // 최대 경우는 2^n - 1 (무조건 하나는 포함)
    // 해당 idx 포함
    dfs(
      idx + 1,
      multi * ingredientArr[idx][0],
      plus + ingredientArr[idx][1],
      cnt + 1
    );
    // 해당 idx 건너뛰고 idx만 올려줌
    dfs(idx + 1, multi, plus, cnt);
  };

  let answer;
  const N = parseInt(input.shift());
  // idx가 1이면 그냥 두개 뺀게 답
  if (N === 1) {
    const [s, b] = input
      .shift()
      .split(' ')
      .map((el) => parseInt(el));
    answer = Math.abs(s - b);
    console.log(answer);
    return;
  }

  // 재료 별 s, b 들어가는 배열
  const ingredientArr = [];
  for (let i = 0; i < N; i++) {
    ingredientArr.push(
      input
        .shift()
        .split(' ')
        .map((el) => parseInt(el))
    );
  }
  // 초기값으로 일단 answer 설정
  answer = Math.abs(ingredientArr[0][0] - ingredientArr[0][1]);
  dfs(0, 1, 0, 0);
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
