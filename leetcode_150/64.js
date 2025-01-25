/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const rowLength = grid.length;
  const colLength = grid[0].length;
  for (let col = 1; col < colLength; col++) {
    grid[0][col] += grid[0][col - 1];
  }

  for (let row = 1; row < rowLength; row++) {
    grid[row][0] += grid[row - 1][0];
  }

  for (let row = 1; row < rowLength; row++) {
    for (let col = 1; col < colLength; col++) {
      grid[row][col] =
        Math.min(grid[row - 1][col], grid[row][col - 1]) + grid[row][col];
    }
  }

  return grid[rowLength - 1][colLength - 1];
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
