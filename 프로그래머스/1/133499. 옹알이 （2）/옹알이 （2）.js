function solution(babbling) {
  var answer = 0;
  const canSpeak = ['aya', 'ye', 'woo', 'ma'];
  // (발음 가능한 단어: idx) 해서 Map 생성
  let speakMap = new Map();
  // 'aya' => 0, ... 이런 식
  canSpeak.forEach((word, wordIdx) => speakMap.set(word, wordIdx));
  let result = babbling.map((test) => {
    for (let i = 0; i < canSpeak.length; i++) {
      const regex = new RegExp(`${canSpeak[i]}`, 'g');
      test = test.replace(regex, speakMap.get(canSpeak[i]));
    }
    return test;
  });

  result.forEach((el) => {
    if (!/\D/.test(el) && !/(\d)\1/.test(el)) {
      answer++;
    }
  });
  return answer;
}