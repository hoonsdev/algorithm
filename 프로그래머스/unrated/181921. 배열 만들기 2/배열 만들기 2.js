function solution(l, r) {
  var answer = [];
  for (let i = l; i <= r; i++) {
    let strI = i.toString().split('');
    if (
      strI.every((el) => {
        return el === '0' || el === '5';
      })
    ) {
      answer.push(i);
    }
  }
  return answer.length ? answer : [-1];
}