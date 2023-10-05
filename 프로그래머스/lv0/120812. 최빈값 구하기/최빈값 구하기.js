function solution(array) {
  var answer = 0;
  if (array.length === 1) {
    answer = array[0];
  } else {
    // 배열 요소에 대해 몇번 나왔는지 객체 형태로 저장
    // 여기서 initialValue 설정 안하면 배열의 첫 번째 요소를 사용 -> ...1 이 되어서 에러 처리 나는데 왜 그냥 동작하는지는 모르겠음..
    const newObject = array.reduce((acc, cur) => {
      return { ...acc, [cur]: (acc[cur] || 0) + 1 };
    }, {});
    // 최빈값 mode 설정
    let mode = [];
    let maxValue = Math.max(...Object.values(newObject));
    for (let key in newObject) {
      if (newObject[key] === maxValue) {
        mode.push(key);
      }
    }
    mode.length > 1 ? (answer = -1) : (answer = parseInt(mode[0]));
  }
  return answer;
}

console.log(solution([1, 2, 3, 3, 3, 4]));
console.log(solution([1, 1, 2, 2]));
console.log(solution([1]));
