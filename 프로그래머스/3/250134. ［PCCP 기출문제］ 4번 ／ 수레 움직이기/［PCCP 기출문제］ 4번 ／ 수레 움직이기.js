function solution(maze) {
  var answer = [];
  const n = maze.length;
  const m = maze[0].length;
  let red;
  let blue;

  maze.map((line, idx) => {
    line.map((cell, idx2) => {
      if (cell === 1) {
        red = [idx2, idx];
      } else if (cell === 2) {
        blue = [idx2, idx];
      }
    });
  });

  const dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  // red와 blue 각각의 visited 배열 생성
  const visited = Array.from({ length: 2 }, () =>
    Array.from({ length: n }, () => Array.from({ length: m }, () => false))
  );

  const dfs = (rx, ry, bx, by, count) => {
    // 둘 다 목표 지점에 도달했을 때
    if (maze[ry][rx] === 3 && maze[by][bx] === 4) {
      answer.push(count);
      return;
    }

    // 빨간 공만 목표 지점에 도달했을 때
    if (maze[ry][rx] === 3 && maze[by][bx] !== 4) {
      for (let i = 0; i < dirs.length; i++) {
        const nbx = bx + dirs[i][0];
        const nby = by + dirs[i][1];

        if (
          nbx >= 0 &&
          nbx < m &&
          nby >= 0 &&
          nby < n &&
          !visited[1][nby][nbx] &&
          !(nbx === rx && nby === ry) &&
          maze[nby][nbx] !== 5
        ) {
          visited[1][nby][nbx] = true;
          dfs(rx, ry, nbx, nby, count + 1);
          visited[1][nby][nbx] = false;
        }
      }
      return; // 조건이 충족되었으므로 반환
    }

    // 파란 공만 목표 지점에 도달했을 때
    if (maze[ry][rx] !== 3 && maze[by][bx] === 4) {
      for (let i = 0; i < dirs.length; i++) {
        const nrx = rx + dirs[i][0];
        const nry = ry + dirs[i][1];

        if (
          nrx >= 0 &&
          nrx < m &&
          nry >= 0 &&
          nry < n &&
          !visited[0][nry][nrx] &&
          !(nrx === bx && nry === by) &&
          maze[nry][nrx] !== 5
        ) {
          visited[0][nry][nrx] = true;
          dfs(nrx, nry, bx, by, count + 1);
          visited[0][nry][nrx] = false;
        }
      }
      return; // 조건이 충족되었으므로 반환
    }

    // 둘 다 도달하지 않은 경우
    for (let i = 0; i < dirs.length; i++) {
      const nrx = rx + dirs[i][0];
      const nry = ry + dirs[i][1];

      if (
        nrx >= 0 &&
        nrx < m &&
        nry >= 0 &&
        nry < n &&
        !visited[0][nry][nrx] &&
        maze[nry][nrx] !== 5
      ) {
        for (let j = 0; j < dirs.length; j++) {
          const nbx = bx + dirs[j][0];
          const nby = by + dirs[j][1];

          if (
            nbx >= 0 &&
            nbx < m &&
            nby >= 0 &&
            nby < n &&
            !visited[1][nby][nbx] &&
            !(nbx === nrx && nby === nry) &&
            maze[nby][nbx] !== 5
          ) {
            if (!(nbx === rx && nby === ry && bx === nrx && by === nry)) {
              visited[0][nry][nrx] = true;
              visited[1][nby][nbx] = true;
              dfs(nrx, nry, nbx, nby, count + 1);
              visited[0][nry][nrx] = false;
              visited[1][nby][nbx] = false;
            }
          }
        }
      }
    }
  };

  visited[0][red[1]][red[0]] = true;
  visited[1][blue[1]][blue[0]] = true;
  dfs(red[0], red[1], blue[0], blue[1], 0);

  if (answer.length === 0) return 0;
  else return Math.min(...answer);
}
