function riverSizes(matrix) {
  const result = [];
  const ROWS = matrix.length;
  const COLS = matrix[0].length;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (matrix[row][col] === 1) {
        result.push(dfs(row, col));
      }
    }
  }

  function dfs(row, col) {
    const stack = [[row, col]];
    let size = 1;
    while (stack.length > 0) {
      const [currentRow, currentCol] = stack.pop();
      matrix[currentRow][currentCol] = 0;
      for (const [dr, dc] of directions) {
        const newRow = dr + currentRow;
        const newCol = dc + currentCol;
        if (
          newRow < ROWS &&
          newRow >= 0 &&
          newCol < COLS &&
          newCol >= 0 &&
          matrix[newRow][newCol] === 1
        ) {
          matrix[newRow][newCol] = 0;
          size++;
          stack.push([newRow, newCol]);
        }
      }
    }

    return size;
  }

  return result;
}

console.log(
  riverSizes([
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
  ])
);
