/**
 * @description Solution to find the non constructible change
 * @param {number[]} coins
 * @returns {number}
 * @complexities Time => O(1) | Space = O(1)
 */
const nonConstructibleChange = (coins) => {
  const sortedCoins = coins.sort((a, b) => a - b);
  let currentChangeCreated = 0;
  for (const coin of sortedCoins) {
    if (coin > currentChangeCreated + 1) {
      return currentChangeCreated + 1;
    }
    currentChangeCreated += coin;
  }
  return currentChangeCreated + 1;
};

console.log(nonConstructibleChange([1, 2, 5]));
