// 문제 풀이
function solution(input) {
  const N = +input.shift();

  // 단축키 지정한 알파벳 모은 배열
  const shortcut = [];

  const checkAll = (option, shortcut) => {
    const words = option.split(' ');
    let flag = false;
    for (let i = 0; i < words.length; i++) {
      if (flag) break;
      for (let j = 1; j < words[i].length; j++) {
        const target = words[i][j];
        if (
          !shortcut.includes(target.toUpperCase()) &&
          !shortcut.includes(target.toLowerCase())
        ) {
          const alphas = words[i].split('');
          alphas.splice(j, 1, `[${target}]`);
          words[i] = alphas.join('');
          shortcut.push(target);
          flag = true;
          break;
        }
      }
    }
    return words.join(' ');
  };

  for (let i = 0; i < N; i++) {
    const option = input[i];
    const words = option.split(' ');
    let flag = false;
    let j = 0;
    while (j < words.length) {
      const target = words[j][0];
      if (
        !shortcut.includes(target.toUpperCase()) &&
        !shortcut.includes(target.toLowerCase())
      ) {
        words[j] = `[${target}]${words[j].slice(1)}`;
        shortcut.push(target);
        flag = true;
        break;
      } else {
        j++;
      }
    }
    if (!flag) {
      res = checkAll(input[i], shortcut);
      input[i] = res;
    } else {
      input[i] = words.join(' ');
    }
  }

  input.forEach((el) => console.log(el));
}

// Readline module
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  solution(input);
  process.exit();
});
