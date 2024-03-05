function solution(plans) {
  var answer = [];

  // timestamp 형식으로 시작 시간 변경해서 객체 배열 생성
  const info = [];
  for (const plan of plans) {
    const [hour, min] = plan[1].split(':').map(Number);
    const start = hour * 60 + min;
    info.push({ name: plan[0], start: start, playtime: +plan[2] });
  }

  // 시작 시간 빠른 순으로 정렬
  info.sort((a, b) => a.start - b.start);

  // 실행중, 실행 완료 배열
  const run = [];
  const done = [];

  // 정렬된 배열을 탐색하기 위한 인덱스
  let idx = 0;

  // 00:00 ~ 23:59 분 단위로 모두 탐색
  for (let i = 0; i < 1440; i++) {
    // 실행중 배열의 0번째 인덱스에 있는 항목이 다음 실행할 항목(fifo)
    // 만약 해당 항목을 1번 실행했을 때(playtime -1) 0이면 실행중 배열에서 제거 후 완료 배열에 추가, 아니면 그냥 시간만 업데이트
    if (run.length) {
      const cur = run[0];
      cur.playtime--;
      if (!cur.playtime) {
        run.shift();
        done.push(cur.name);
      }
    }

    // idx가 info 배열 길이 내부이고, 시작시간이 현재시간 됐을 때 실행중 배열에 추가 후 idx 증가(다음거 실행시켜야 하니까)
    if (idx < info.length && i === info[idx].start) {
      run.unshift(info[idx]);
      idx++;
    }
  }

  // 23:59 이후로 진행되고 있는거는 추가된 순서대로 실행
  const notDone = run.map(({ name }) => name);
  answer.push(...done, ...notDone);

  return answer;
}
