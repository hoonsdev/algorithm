function solution(a, b, c, d) {
  var answer = 0;
  // 원본배열
  let numList = [a, b, c, d];
  // 중복 제거된 배열
  let distinct = [...new Set(numList)];
  // 중복일 때 찾기 위해 어떤 숫자가 몇번 나왔는지 표시하는 객체
  let result = {};
  numList.forEach((el) => {
    result[el] = (result[el] || 0) + 1;
  });
  switch (distinct.length) {
    // 중복 제거된 배열의 길이에 따라 케이스 구분
    case 1:
      // 4개 같은 값
      answer = 1111 * numList[0];
      break;
    case 2:
      // 2 2 or 1 3
      let [p, q] = distinct;
      let count = 0;
      for (i = 0; i < numList.length; i++) {
        for (j = i + 1; j < numList.length; j++) {
          if (numList[i] === numList[j]) {
            count++;
          }
        }
      }
      if (count === 3) {
        let pCount = 0,
          qCount = 0;
        numList.forEach((num) => {
          num === p ? pCount++ : qCount++;
        });
        pCount > qCount
          ? (answer = (10 * p + q) ** 2)
          : (answer = (10 * q + p) ** 2);
      } else if (count === 2) {
        answer = (p + q) * Math.abs(p - q);
      }
      break;
    case 3:
      // 2 1 1 케이스
      // 중복인 값 찾기
      let duplicate = numList.find(
        (num, index, arr) => arr.indexOf(num) !== index
      );
      // 원본 배열에서 중복인 값 제거
      let [qValue, rValue] = numList.filter((num) => {
        return num !== duplicate;
      });
      answer = qValue * rValue;

      break;
    case 4:
      // 모두 다른 숫자
      let minNum = numList[0];
      numList.forEach((num) => {
        minNum > num ? (minNum = num) : minNum;
      });
      answer = minNum;
      break;
  }
  return answer;
}
