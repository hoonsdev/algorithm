// 좋은 풀이
function solution(array) {
    let m = new Map();
    for (let n of array) m.set(n, (m.get(n) || 0)+1);
    m = [...m].sort((a,b)=>b[1]-a[1]);
    return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}

// 내 풀이
// function solution(array) {
//   var answer = 0;
//   if (array.length === 1) {
//     answer = array[0];
//   } else {
//     // 배열 요소에 대해 몇번 나왔는지 객체 형태로 저장
//     // 여기서 initialValue 설정 안하면 배열의 첫 번째 요소를 사용 -> ...1 이 되어서 에러 처리 나는데 왜 그냥 동작하는지는 모르겠음..
//     const newObject = array.reduce((acc, cur) => {
//       return { ...acc, [cur]: (acc[cur] || 0) + 1 };
//     }, {});
//     // 최빈값 mode 설정
//     let maxValue = 0;
//     let mode = [];
//     for (let key in newObject) {
//       if (newObject[key] > maxValue) {
//         maxValue = newObject[key];
//       }
//     }
//     for (let key in newObject) {
//       if (newObject[key] === maxValue) {
//         mode.push(key);
//       }
//     }
//     mode.length > 1 ? (answer = -1) : (answer = parseInt(mode[0]));
//   }
//   return answer;
// }
