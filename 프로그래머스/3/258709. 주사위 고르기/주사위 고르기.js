function solution(dice) {
  var answer = [];

  const n = dice.length;

  const tempRes = Array.from({ length: n / 2 });
  const aCombiRes = [];

  // 1. A가 n/2개 주사위 선택하는 케이스 다 계산
  // 조합 : DFS 트리를 이용해 품
  // 트리를 순회할 때 다음 시작점을 가지고 간다
  const combination = (depth, begin) => {
    if (depth === n / 2) {
      aCombiRes.push(tempRes.slice());
      return;
    }

    for (let i = begin; i < n; i++) {
      tempRes[depth] = i;
      combination(depth + 1, i + 1);
    }
  };
  combination(0, 0);

  // B 조합 구하기 위해서
  const dices = [];
  for (let i = 0; i < n; i++) {
    dices.push(i);
  }
  const bCombiRes = aCombiRes.map((combi) => {
    return dices.filter((el) => !combi.includes(el));
  });

  // 2. 그 케이스에 대해서 A, B가 가진 주사위로 나올 수 있는 합 6^(n/2)개 배열에 저장해놓기
  const getSums = (combi) => {
    const res = [];

    const calSum = (idx, sum) => {
      if (idx === n / 2) {
        res.push(sum);
        return;
      }

      for (let i = 0; i < 6; i++) {
        calSum(idx + 1, sum + dice[combi[idx]][i]);
      }
    };
    calSum(0, 0);

    return res.sort((a, b) => a - b);
  };

  // 3. 합이 담긴 배열에 대해서 A의 요소가 B의 요소보다 큰 경우 답++
  // A랑 B를 계속 비교하다가 B가 같거나 커지는 순간이 온다 -> 그 지점을 포인터로 기억
  // 다음 A의 요소에 대해서는 그 지점부터 탐색하면 된다 글고 그 루프에서 나온 결과 + 포인터 하면 더 많은 것의 개수임
  // 그 지점까지 A의 요소는 당연히 클 것이기 때문!
  let maxWins = 0;
  aCombiRes.map((combi, idx) => {
    const aSums = getSums(combi);
    const bSums = getSums(bCombiRes[idx]);

    let pointer = 0;

    // 해당 콤비에서 최대 이기는 횟수
    let nowWins = 0;

    for (let i = 0; i < aSums.length; i++) {
      for (let j = pointer; j < bSums.length; j++) {
        // B의 합이 커지는 순간이 있다 => 그 지점을 기억
        // 그 지점까지는 다음 A 요소가 무조건 그 지점전까지의 B 요소보다 큼
        if (aSums[i] <= bSums[j]) {
          pointer = j;
          break;
        }
        nowWins++;
      }
      nowWins += pointer;
    }

    if (nowWins > maxWins) {
      maxWins = nowWins;
      answer = aCombiRes[idx];
    }
  });

  return answer.map((el) => el + 1);
}
