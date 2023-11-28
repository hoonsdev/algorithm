function solution(maps) {
  let answer;
  // 맵 가로, 세로 길이
  const n = maps.length;
  const m = maps[0].length;

  // 방향
  let dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  // 이중 배열로 만들기
  const matrix = [];
  maps.map((row) => {
    matrix.push(row.split(''));
  });

  // 시작점 위치 찾기
  let start;
  matrix.forEach((row, rowIdx) => {
    if (row.indexOf('S') !== -1) start = [rowIdx, row.indexOf('S')];
  });

  // 방문한 지점 체크하는 이차원 배열 -> 시작 지점을 방문한 걸로 처리
  let visited = Array.from({ length: n }, () => new Array(m).fill(0));
  visited[start[0]][start[1]] = 1;

  // 시작점을 방문해야하는 큐에 추가 (x, y, 누적 시간, 레버 열림 여부)
  let queue = [[start[0], start[1], 0, false]];

  // 상하좌우 탐색
  while (queue.length) {
    // 큐에서 하나 빼와서 그 점을 현재 위치로 지정
    let [cx, cy, time, isOpen] = queue.shift();
    // 현재 지점이 레버 위치일 때
    if (matrix[cx][cy] === 'L') {
      isOpen = true;
      // 방문 지점 체크 배열 초기화하기
      visited = Array.from({ length: n }, () => new Array(m).fill(0));
      visited[cx][cy] = 1;
      queue = [];
    }
    // 현재 지점이 출구 위치일 때
    if (matrix[cx][cy] === 'E' && isOpen) {
      answer = time;
      break;
    }
    // 둘다 해당 x -> 다음 위치 예측하기
    for (let i = 0; i < dir.length; i++) {
      let nx = cx + dir[i][0];
      let ny = cy + dir[i][1];
      // 다음 지점이 맵 밖으로 벗어날 때
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
        continue;
      }
      // 다음 지점이 X 거나 이미 방문한 위치일 때
      if (matrix[nx][ny] === 'X' || visited[nx][ny] === 1) {
        continue;
      }
      // 다음 지점을 현재 지점으로 설정 후 방문한 것으로 표시
      queue.push([nx, ny, time + 1, isOpen]);
      visited[nx][ny] = 1;
    }
  }

  return answer ? answer : -1;
}