function solution(players, callings) {
  let playerMap = new Map();
  players.forEach((player, idx) => {
    playerMap.set(player, idx);
  });
  callings.forEach((calling) => {
    let playerIdx = playerMap.get(calling);
    if (playerIdx !== 0) {
      let temp = players[playerIdx];
      playerMap.set(calling, playerIdx - 1);
      playerMap.set(players[playerIdx - 1], playerIdx);
      players[playerIdx] = players[playerIdx - 1];
      players[playerIdx - 1] = temp;
    }
  });
  return players;
}
