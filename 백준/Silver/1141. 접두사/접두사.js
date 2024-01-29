const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());
input.sort((a, b) => b.length - a.length); //단어 길이 역순 정렬
const output = [];
for (const str of input)
  if (output.every((e) => e.indexOf(str) !== 0)) output.push(str);
// 접두사 check
console.log(output.length);