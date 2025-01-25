/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const rowLength = obstacleGrid.length;
  const colLength = obstacleGrid[0].length;
  if (
    obstacleGrid[0][0] === 1 ||
    obstacleGrid[rowLength - 1][colLength - 1] === 1
  ) {
    return 0;
  }

  const dp = constructDp(rowLength, colLength);
  dp[0][0] = 1;
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (obstacleGrid[row][col] === 1) {
        dp[row][col] = 0;
      } else {
        if (row > 0) {
          dp[row][col] = dp[row][col] + dp[row - 1][col];
        }
        if (col > 0) {
          dp[row][col] = dp[row][col] + dp[row][col - 1];
        }
      }
    }
  }

  return dp[rowLength - 1][colLength - 1];
};

const constructDp = (rowLength, colLength) => {
  const dp = [];
  for (let row = 0; row < rowLength; row++) {
    const newRow = [];
    for (let col = 0; col < colLength; col++) {
      newRow.push(0);
    }
    dp[row] = newRow;
  }

  return dp;
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
