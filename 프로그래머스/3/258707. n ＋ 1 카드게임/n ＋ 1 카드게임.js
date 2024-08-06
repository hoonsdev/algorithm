function solution(coin, cards) {
  const n = cards.length;
  let round = 0;

  let idx = n / 3;
  let myCards = [];
  let newCards = [];
  for (let i = 0; i < idx; i++) {
    myCards.push(cards[i]);
  }

  let loopEnd = true;
  while (loopEnd) {
    // 라운드 증가
    round++;

    if (idx >= n) {
      loopEnd = false;
    }

    const roundCards = cards.slice(idx, idx + 2);
    newCards.push(...roundCards);
    idx += 2;

    let isPossible = false;
    for (let i = 0; i < myCards.length; i++) {
      let target = n + 1 - myCards[i];
      if (myCards.includes(target)) {
        isPossible = true;
        myCards = myCards.filter((el, idx) => idx !== i && el !== target);
        break;
      }
    }

    if (!isPossible && coin >= 1) {
      for (let i = 0; i < newCards.length; i++) {
        let target2 = n + 1 - newCards[i];
        if (myCards.includes(target2)) {
          isPossible = true;
          newCards = newCards.filter((newCard) => newCard !== newCards[i]);
          myCards = myCards.filter((myCard) => myCard !== target2);
          coin--;
          break;
        }
      }
    }

    if (!isPossible && coin >= 2) {
      for (let i = 0; i < newCards.length; i++) {
        let target = n + 1 - newCards[i];
        if (newCards.includes(target)) {
          isPossible = true;
          newCards = newCards.filter((el, idx) => idx !== i && el !== target);
          coin -= 2;
          break;
        }
      }
    }

    if (!isPossible) {
      loopEnd = false;
    }
  }

  return round;
}
