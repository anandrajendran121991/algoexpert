function largestIsland(matrix) {
  const rowLength = matrix.rowLength;
  const colLength = matrix[0].length;
  const isLandSizes = [];
  let islandId = 2;
  const visited = new Map();
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (matrix[row][col] === 0 && !visited.has(`${row},${col}`)) {
        isLandSizes[islandId - 2] = dfs();
        islandId++;
      }
    }
  }
}

console.log(
  largestIsland([
    [0, 1, 0],
    [1, 0, 1],
    [1, 0, 1],
  ])
);
