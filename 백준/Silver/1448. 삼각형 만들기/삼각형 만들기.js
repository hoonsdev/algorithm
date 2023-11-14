const fs = require('fs');

let input = (fs.readFileSync('./dev/stdin') + '').toString().trim().split('\n');
const n = +input.shift();
// 삼각형의 조건이 맞는지 확인하는 함수 생성
const checkTri = (a, b, c) => {
  return a < b + c;
};

// 받은 배열을 숫자로 바꾸면서 내림차순 정렬
input = input.map((a) => parseInt(a)).sort((a, b) => b - a);
let ans = 0;

for (let i = 0; i < n - 2; i++) {
  // 가장 큰 수부터 차례로 대입해봄 
  if (checkTri(input[i], input[i + 1], input[i + 2])) {
    ans = [input[i], input[i + 1], input[i + 2]].reduce(
      (acc, cur) => acc + cur
    );
    break;
  }
}

console.log(ans === 0 ? -1 : ans);