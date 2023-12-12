// 입력 문제로 인해서 계속 시간초과가 떠서, java로 변환해서 제출했더니 성공..!!
// 로직은 이게 틀리지 않은거 같아서 덮어쓰기 합니다!
// 문제 풀이
function solution(input) {
  const T = +input.shift();
  for (let i = 0; i < T; i++) {
    // 위상정렬
    const topologySort = (target) => {
      // 큐
      let queue = [];

      // 선행 없으면 큐에 삽입 -> 시작점 설정
      for (let j = 1; j <= N; j++) {
        if (inDeg[j] === 0) queue.push(j);
      }

      // 큐 빌때까지 반복
      while (queue.length) {
        const cur = queue.shift();
        if (cur === target) {
          return dp[target];
        }

        for (let j = 0; j < graph[cur].length; j++) {
          let next = graph[cur][j];

          // 다른 경로로 설정된 다음 건설 시간 : dp[next]
          // 내 기준으로 다음 빌딩 건설시간을 더했을 때 dp[next] 보다 크면 업데이트하기
          if (dp[next] < dp[cur] + build[next]) {
            dp[next] = dp[cur] + build[next];
          }

          // 진입차수 한 개 빼주기
          inDeg[next]--;

          if (!inDeg[next]) queue.push(next);
        }
      }
      return 0;
    };

    let [N, K] = input.shift().split(' ').map(Number);
    // 건설 시간 배열
    let build = [0, ...input.shift().split(' ').map(Number)];
    // dp -> 변경사항 업데이트 해주는 배열
    let dp = [...build];
    // 위상정렬: 각 노드에 대한 진입차수 저장 배열
    let inDeg = new Array(N + 1).fill(0);
    // 연결 관계를 나타내주는 graph
    let graph = Array.from({ length: N + 1 }, () => []);
    // 진입차수 및 노드, 간선 관계 설정
    for (let j = 0; j < K; j++) {
      let [s, e] = input.shift().split(' ').map(Number);
      inDeg[e]++;
      graph[s].push(e);
    }
    let W = +input.shift();
    let answer = topologySort(W);

    console.log(answer);
  }
}

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
