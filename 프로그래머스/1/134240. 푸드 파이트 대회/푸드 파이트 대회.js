function solution(food) {
  var answer = [];
  // 준비한 물의 양 배열에서 제거
  const water = food.shift();
  let foodMap = new Map();
  // 각 index에 해당하는 음식 개수가 1보다 클때만 value로 지정
  food.forEach((el, idx) => {
    foodMap.set(idx + 1, el > 1 ? el : '');
  });
  // food 인덱스 담은 foodIdx 배열, 해당 idx 음식의 양을 담은 foodAmount 배열
  let foodIdx = Array.from(foodMap.keys());
  let foodAmount = Array.from(foodMap.values());
  foodAmount.forEach((el, idx) => {
    // value 가 truthy한 값일 때에만 반복해서 추가
    el
      ? answer.push(foodIdx[idx].toString().repeat(Math.floor(el / 2)))
      : answer;
  });
  return [...answer].join('') + '0' + [...answer.reverse()].join('');
}
