/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }

  let maxSquare = 0;
  const rowLength = matrix.length;
  const colLength = matrix[0].length;

  // Initialize the cache matrix
  const cache = constructMatrix(matrix, rowLength, colLength);

  // Iterate from bottom-right to top-left
  for (let row = rowLength - 1; row >= 0; row--) {
    for (let col = colLength - 1; col >= 0; col--) {
      if (matrix[row][col] === "1") {
        if (row < rowLength - 1 && col < colLength - 1) {
          // Update cache for the current cell
          cache[row][col] =
            Math.min(
              cache[row + 1][col], // Down
              cache[row][col + 1], // Right
              cache[row + 1][col + 1] // Diagonal
            ) + 1;
        }
        // Update max square size
        maxSquare = Math.max(maxSquare, cache[row][col]);
      }
    }
  }

  return maxSquare * maxSquare;
};

const constructMatrix = (matrix, rowLength, colLength) => {
  // Initialize the cache matrix with the same values as the input matrix
  const cache = [];
  for (let row = 0; row < rowLength; row++) {
    const newRow = [];
    for (let col = 0; col < colLength; col++) {
      newRow.push(+matrix[row][col]); // Convert "1"/"0" to numbers
    }
    cache.push(newRow);
  }
  return cache;
};

// Test case
console.log(
  maximalSquare([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["0", "0", "1", "1", "1"],
  ])
);

console.log(
  maximalSquare([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["0", "0", "1", "1", "1"],
  ])
);
