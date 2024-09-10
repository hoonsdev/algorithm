function solution(k, n, reqs) {
  var answer = 0;
  // 얘도 dp다 무족권
  // 멘토 i명일 때 기다린 시간 최솟값
  // dp 아닌것 같음. 이전 값을 사용할 건덕지가 없는데..

  const result = Array.from({ length: k + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0)
  ); // i유형의 상담에 멘토 j명 배치되었을 때 대기시간 최솟값
  const waiting = Array.from({ length: k + 1 }, () => []); // 대기 리스트

  // 타입별로 지원 현황 파악
  for (let i = 0; i < reqs.length; i++) {
    const [start, duration, type] = reqs[i];
    waiting[type].push([start, duration]);
  }

  // 각 유형별로 1~n 명의 상담사 배정했을 때 대기시간
  for (let i = 1; i < k + 1; i++) {
    if (waiting[i].length === 0) {
      continue;
    }
    for (let j = 1; j < n + 1; j++) {
      const iWait = waiting[i].slice();
      const onArr = Array.from({ length: j + 1 }, () => 0); // j명의 상담사의 상담 끝나는 시간 리스트
      // 초기값
      const [fStart, fDur] = iWait.shift();
      onArr[1] = fStart + fDur;
      let waitTime = 0;
      while (iWait.length) {
        const [start, dur] = iWait.shift();
        // 상담사끼리 상담 끝나는 시간을 비교해서 가장 빨리 끝나는 상담사에게 배정
        // 만약 이번 턴의 지원자 시작 시간이 끝나는 시간보다 빠르면 기다려야 하고, 아니면 대기시간 x
        let minValue = Infinity;
        let minIdx = 0;
        for (let l = 1; l <= j; l++) {
          if (onArr[l] < minValue) {
            minValue = onArr[l];
            minIdx = l;
          }
        }
        if (minValue > start) {
          waitTime += minValue - start;
          onArr[minIdx] = minValue + dur;
        } else {
          // 남은 상담사가 있으므로 대기시간 늘어나지 않음: 끝나는 시간만 변경해줌
          onArr[minIdx] = start + dur;
        }
      }
      result[i][j] += waitTime;
    }
  }

  // 각 유형당 한명씩은 배치
  const numOfMArr = Array.from({ length: k + 1 }, () => 0);
  for (let i = 1; i <= k; i++) {
    numOfMArr[i]++;
  }

  // 우리는 현재 i유형에 j명 배치하면 기다리는 시간이 어떻게 되는지 알고 있다
  // 그럼 조합을 어떻게 짜야 총 n 명의 멘토가 유지되면서 대기시간이 최소가 될까? 전부 탐색?
  // k 개의 유형을 다 탐색
  // 각 유형당 배정된 멘토의 수가 있고, 한명을 더 배치할 때 생각을 해야한다
  // 탐색 하면서 해당 유형에 멘토를 배치하면 감소하는 대기시간을 비교해서 가장 대기시간이 많이 줄어드는 유형에 배치!
  for (let i = 0; i < n - k; i++) {
    let maxGap = 0;
    let targetIdx = 1;
    for (let j = 1; j <= k; j++) {
      const temp = result[j][numOfMArr[j]] - result[j][numOfMArr[j] + 1]; // j 유형에서 다음으로 넘어갈 때의 차이
      if (temp > maxGap) {
        maxGap = temp;
        targetIdx = j;
      }
    }
    numOfMArr[targetIdx]++;
  }

  for (let i = 1; i <= k; i++) {
    answer += result[i][numOfMArr[i]];
  }

  return answer;
}
