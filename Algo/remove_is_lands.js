const removeIslands = (matrix) => {
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      const rowIsBorder = row === 0 || row === rowLength - 1;
      const colIsBorder = col === 0 || col === colLength - 1;
      const isBorder = rowIsBorder || colIsBorder;
      const currentValue = matrix[row][col];
      if (currentValue !== 1) {
        continue;
      }

      if (!isBorder) {
        continue;
      }
      getConnectedIslands(matrix, row, col);
    }
  }

  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      const currentValue = matrix[row][col];
      if (currentValue === 2) {
        matrix[row][col] = 1;
      }

      if (currentValue === 1) {
        matrix[row][col] = 0;
      }
    }
  }

  return matrix;
};

const getConnectedIslands = (matrix, row, col) => {
  const stack = [[row, col]];
  while (stack.length > 0) {
    const currentPosition = stack.pop();
    const [currentRow, currentCol] = currentPosition;
    matrix[currentRow][currentCol] = 2;

    const neighours = getNeighours(matrix, currentRow, currentCol);
    for (const neighour of neighours) {
      const [neighourRow, neighourCol] = neighour;
      // There are chances of zeros
      if (matrix[neighourRow][neighourCol] !== 1) {
        continue;
      }
      stack.push(neighour);
    }
  }
};

const getNeighours = (matrix, row, col) => {
  const neighours = [];
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  // up
  if (row - 1 >= 0) {
    neighours.push([row - 1, col]);
  }
  // down
  if (row + 1 < rowLength) {
    neighours.push([row + 1, col]);
  }

  // right
  if (col + 1 < colLength) {
    neighours.push([row, col + 1]);
  }

  // left
  if (col - 1 >= 0) {
    neighours.push([row, col - 1]);
  }

  return neighours;
};

console.log(
  removeIslands([
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1],
  ])
);
