function minimumPassesOfMatrix(matrix) {
  let passes = 0;
  // all negative values - O(n * m)
  let negativeCount = 0;
  const queue = [];
  const ROWS = matrix.length;
  const COLS = matrix[0].length;
  const directions = [
    [1, 0], // down
    [-1, 0], // top
    [0, 1], // right
    [0, -1], // left
  ];
  // O(n * m)
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (matrix[row][col] < 0) negativeCount++;
      else if (matrix[row][col] > 0) queue.push([row, col]);
    }
  }

  while (queue.length > 0) {
    const queueSize = queue.length;
    let madeChange = false;
    for (let i = 0; i < queueSize; i++) {
      const [currRow, currCol] = queue.shift();

      for (const [dr, dc] of directions) {
        const newRow = dr + currRow;
        const newCol = dc + currCol;
        if (
          newRow < ROWS &&
          newRow >= 0 &&
          newCol < COLS &&
          newCol >= 0 &&
          matrix[newRow][newCol] < 0
        ) {
          matrix[newRow][newCol] *= -1;
          negativeCount--;
          queue.push([newRow, newCol]);
          madeChange = true;
        }
      }
    }
    if (madeChange) passes++;
  }

  return negativeCount > 0 ? -1 : passes;
}

console.log(
  minimumPassesOfMatrix([
    [0, -1, -3, 2, 0],
    [1, -2, -5, -1, -3],
    [3, 0, 0, -4, -1],
  ])
);
