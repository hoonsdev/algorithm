// 정수를 n자리 이진수로 변환
function binary(num, n) {
  let arr = new Array(n).fill(0);
  let idx = 0;
  while (num > 1) {
    arr[idx] = num % 2;
    idx++;
    num = Math.floor(num / 2);
  }
  // 마지막 몫도 추가
  arr[idx] = num;
  return arr.reverse();
}

function solution(n, arr1, arr2) {
  // n x n 개수만큼 0으로 배열 채움.
  var answer = [];
  let result = new Array(n ** 2).fill(0);

  // 지도 1, 2에 대해 1의 위치 즉 벽의 위치를 찾고 만약 벽이라면 해당 인덱스를 1로 바꿈
  arr1.forEach((num1, row) => {
    binary(num1, n).forEach((digit, col) =>
      digit === 1
        ? (result[n * row + col] = '#')
        : result[n * row + col] === 0
        ? (result[n * row + col] = ' ')
        : result
    );
  });
  arr2.forEach((num2, row) => {
    binary(num2, n).forEach((digit, col) =>
      digit === 1
        ? (result[n * row + col] = '#')
        : result[n * row + col] === 0
        ? (result[n * row + col] = ' ')
        : result
    );
  });
  for (let i = 0; i < n; i++) {
    answer.push(result.slice(i * n, i * n + n).join(''));
  }

  return answer;
}

// 비트 연산자 & 정규표현식을 통한 코드
// function solution(n, arr1, arr2) {
//     return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
// }

// const addZero = (n, s) => {
//     return '0'.repeat(n - s.length) + s;
// }
