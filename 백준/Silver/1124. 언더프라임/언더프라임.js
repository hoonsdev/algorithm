// 문제 풀이
function solution(input) {
  const [A, B] = input.shift().split(' ').map(Number);

  // 소수임을 알려주는 prime 배열
  const prime = Array.from({ length: 100001 }, () => true);
  // 해당 수의 소인수 개수가 몇개인지 나타내는 count 배열
  const countPrime = Array.from({ length: 100001 }, () => 0);

  // false: 소수 x, true: 소수
  prime[0] = false;
  prime[1] = false;

  // 2 ~ 100000까지 수 중에서 소인수 찾기
  for (let i = 2; i < 100001; i++) {
    if (!prime[i]) continue;
    // 에라토스테네스의 채: 소수 판별
    // 소수에 대해서 소수의 배수인 애들 싹다 지우고 그 다음에는 다음 소수의 배수인 애 싹 지우는 방법
    for (let j = i + i; j < 100001; j += i) {
      // j는 소수의 배수이니까 무조건 소수 x
      prime[j] = false;
      // 이 부분이 이 문제에만 적용되는 특수 알고리즘
      // 소수의 배수인데, 이 소수가 몇개나 있는지 확인하는 작업
      let tmp = j;
      while (tmp % i === 0) {
        // 소수로 나눌 때마다 개수 증가시킴
        tmp /= i;
        countPrime[j]++;
      }
    }
  }

  let answer = 0;
  for (let i = A; i <= B; i++) {
    if (prime[countPrime[i]]) answer++;
  }

  console.log(answer);
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
