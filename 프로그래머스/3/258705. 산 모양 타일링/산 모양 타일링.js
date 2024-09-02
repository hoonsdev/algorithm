function solution(n, tops) {
  const dp1 = Array.from({ length: n }, () => 0);
  const dp2 = Array.from({ length: n }, () => 0);
  // 맨 오른쪽 삼각형이 채워져 있는 경우와 아닌 경우로 분류
  // 초기값 설정 -> 첫 도형에 top이 있는지 여부에 따라 달라짐
  dp1[0] = 1;
  dp2[0] = 2 + tops[0];

  // 점화식
  for (let i = 1; i < n; i++) {
    dp1[i] = (dp1[i - 1] + dp2[i - 1]) % 10007;
    dp2[i] = (dp1[i - 1] * (1 + tops[i]) + dp2[i - 1] * (2 + tops[i])) % 10007;
  }

  return (dp1[n - 1] + dp2[n - 1]) % 10007;
}