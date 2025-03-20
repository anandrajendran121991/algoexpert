function numberOfWaysToMakeChange(n, denoms) {
  // Write your code here.
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let denom of denoms) {
    for (let amount = denom; amount <= n; amount++) {
      dp[amount] += dp[amount - denom];
    }
  }

  return dp[n];
}

console.log(numberOfWaysToMakeChange(6, [1, 5]));
