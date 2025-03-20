/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const rowLength = word1.length;
  const colLength = word2.length;
  const dp = [];
  for (let row = 0; row < rowLength + 1; row++) {
    const newRow = [];
    for (let col = 0; col < colLength + 1; col++) {
      newRow.push(0);
    }
    dp[row] = newRow;
  }

  let countOne = word1.length;
  for (let row = 0; row < rowLength + 1; row++) {
    dp[row][colLength] = countOne--;
  }

  let countTwo = word2.length;
  for (let col = 0; col < colLength + 1; col++) {
    dp[rowLength][col] = countTwo--;
  }

  for (let row = rowLength - 1; row >= 0; row--) {
    for (let col = colLength - 1; col >= 0; col--) {
      if (word1[row] === word2[col]) {
        dp[row][col] = dp[row + 1][col + 1];
      } else {
        dp[row][col] =
          Math.min(dp[row + 1][col], dp[row][col + 1], dp[row + 1][col + 1]) +
          1;
      }
    }
  }

  return dp[0][0];
};

console.table(minDistance("hello", "hollo"));
