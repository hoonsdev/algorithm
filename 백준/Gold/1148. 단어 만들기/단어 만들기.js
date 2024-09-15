const fs = require('fs');

function solution(input) {
  const dictionary = [];
  let index = 0;

  // Read dictionary
  while (true) {
    const word = input[index++];
    if (word === '-') break;
    const alMap = new Map();
    word.split('').forEach((el) => alMap.set(el, alMap.get(el) + 1 || 1));
    dictionary.push(alMap);
  }

  // Process puzzles
  while (true) {
    const word = input[index++];
    if (word === '#') break;
    const [min, max] = solve(word.split(''));
    const minString = min[0].sort().join('') + ' ' + min[1];
    const maxString = max[0].sort().join('') + ' ' + max[1];
    console.log(minString, maxString);
  }

  function getCharMap(word) {
    const charMap = new Map();
    word.forEach((char) => {
      charMap.set(char, (charMap.get(char) || 0) + 1);
    });
    return charMap;
  }

  function solve(puzzle) {
    const puzzleMap = getCharMap(puzzle);
    let min = [[], Infinity];
    let max = [[], 0];
    const done = new Set();
    for (let i = 0; i < puzzle.length; i++) {
      const center = puzzle[i];
      if (done.has(center)) continue;
      let count = 0;
      for (let j = 0; j < dictionary.length; j++) {
        let pass = true;
        dictionary[j].forEach((value, key) => {
          if (!puzzleMap.get(key) || puzzleMap.get(key) < value) {
            pass = false;
          }
        });
        if (pass && dictionary[j].get(center)) {
          count++;
        }
      }
      done.add(center);
      if (count > max[1]) max = [[center], count];
      else if (count === max[1]) max[0].push(center);
      if (count === min[1]) min[0].push(center);
      else if (count < min[1]) min = [[center], count];
    }
    return [min, max];
  }
}

// Read input from file or stdin
const input = fs
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : 'input.txt',
    'utf8'
  )
  .toString()
  .trim()
  .split('\n');

solution(input);
