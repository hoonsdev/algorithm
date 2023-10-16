function solution(ingredient) {
  var answer = 0;
  let result = [];
  for (let i = 0; i < ingredient.length; i++) {
    result.push(ingredient[i]);
    // result 배열에서 순서 맞는지 체크
    if (result.slice(-4)?.join('') === '1231') {
      result.pop();
      result.pop();
      result.pop();
      result.pop();
      answer++;
    }
  }
  return answer;
}