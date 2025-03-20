function numberOfWaysToMakeChange(n, denoms) {
  // Write your code here.
  function dfs(target, memo, ways) {
    if (target === 0) return 0;

    if (target < 0) return Infinity;

    if (memo[target] !== undefined) return memo[target];

    let minCoin
    for (const denom of denoms) {
      dfs(target - denom, memo, ways + 1);
    }

    memo[target] = ways;
    return memo[target];
  }

  return dfs(6, {}, 0);
}

console.log(numberOfWaysToMakeChange(6, [1, 5]));
