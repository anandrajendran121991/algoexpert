/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  return dfs(amount, coins, amount);
};

const dfs = (remaining, coins, amount) => {
  if (remaining === 0) {
    return 0;
  }

  if (remaining < 0) {
    return -1;
  }

  let minCoin = amount + 1;

  for (const coin of coins) {
    const res = dfs(remaining - coin, coins, amount);
    if (res === 0) {
      minCoin = Math.min(minCoin, res + 1);
    }
  }

  return minCoin;
};

console.log(coinChange([1, 2, 5], 11));
