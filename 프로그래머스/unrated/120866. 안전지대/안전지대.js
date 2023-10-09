function solution(board) {
  const n = board.length;
  var answer = n ** 2;
  // 위험지대 방향 체크
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
  let bomb = [];
  // 지뢰 위치 찾기
  board.map((line, lineIdx) => {
    line.map((el, elIdx) => {
      if (el === 1) {
        bomb.push([lineIdx, elIdx]);
        answer--;
      }
    });
  });
  // 탐색 후 위치가 범위 내이고, 값이 0일때만 바꿔주면 됨
  bomb.forEach((el) => {
    for (let i = 0; i < 8; i++) {
      const nx = el[0] + dx[i];
      const ny = el[1] + dy[i];
      if (nx >= 0 && ny >= 0 && nx < n && ny < n && board[nx][ny] === 0) {
        board[nx][ny] = 1;
        answer--;
      }
    }
  });

  return answer;
}
