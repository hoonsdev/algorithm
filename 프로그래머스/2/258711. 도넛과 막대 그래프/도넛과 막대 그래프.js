function solution(edges) {
  // 해결 방안
  // input 으로 그래프 형성
  // 그래프가 각 어떤 것인지 판단
  // [정점 번호, 도넛, 막대, 8자] 답 양식
  var answer = new Array(4).fill(0);

  // 그래프 생성 : { node: [진출차수, 진입차수]}
  const graph = {};
  for (let i = 0; i < edges.length; i++) {
    let [nodeStart, nodeEnd] = edges[i];
    // 노드를 기준으로 진출, 진입 차수 판단
    // 따라서 시작, 끝 점 모두 key 값으로 있는지 판단해야함.
    // graph 에 해당 노드 정보가 없으면 초기화
    if (!(nodeStart in graph)) {
      graph[nodeStart] = [0, 0];
    }
    if (!(nodeEnd in graph)) {
      graph[nodeEnd] = [0, 0];
    }
    graph[nodeStart][0]++;
    graph[nodeEnd][1]++;
  }

  // created node
  for (const node in graph) {
    if (!graph[node][1] && graph[node][0] >= 2) {
      answer[0] = parseInt(node);
    }
  }

  // total graph num
  const total = graph[answer[0]][0];

  // 생성 정점에서 그래프와의 연결 제거
  edges.forEach((edge) => {
    const [s, e] = edge;
    if (s !== answer[0]) return;
    graph[e][1]--;
  });

  for (const node in graph) {
    const [o, i] = graph[node];
    if (o === 2 && i === 2) answer[3]++;
    if (i === 0 && o <= 1) answer[2]++;
  }

  answer[1] = total - (answer[3] + answer[2]);

  return answer;
}
