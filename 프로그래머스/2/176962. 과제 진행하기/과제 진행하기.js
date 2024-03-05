function solution(plans) {
  var answer = [];

  const info = {};
  for (const plan of plans) {
    const [hour, min] = plan[1].split(':').map(Number);
    const start = hour * 60 + min;
    info[start] = [plan[0], +plan[2]];
  }

  const run = [];
  const done = [];

  let curTime = 0;

  while (curTime < 1440) {
    if (info[curTime]?.length) {
      run.unshift(info[curTime]);
    }

    curTime++;
    if (run.length) {
      let [curName, curDur] = run.shift();
      curDur--;

      if (!curDur) {
        done.push(curName);
      } else {
        run.unshift([curName, curDur]);
      }
    } else {
      continue;
    }
  }

  answer.push(...done, ...run.map(([name, _]) => name));

  return answer;
}
