function minimumPassesOfMatrix(matrix) {
  const negativePositions = new Map();
  let toBeConvertedPositions = [];
  let passCount = 0;
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      let currentVal = matrix[row][col];
      if (currentVal < 0) {
        negativePositions.set(`${row},${col}`, true);
      }
    }
  }

  while (negativePositions.size > 0) {
    for (const negativePosition of negativePositions) {
      const [nRow, nCol] = negativePosition[0].split(",");

      const positiveNeigbour = checkNeigbours(+nRow, +nCol, matrix);
      if (positiveNeigbour) {
        toBeConvertedPositions.push([+nRow, +nCol]);
        negativePositions.delete(`${nRow},${nCol}`);
      }
    }

    if (toBeConvertedPositions.length <= 0) {
      return -1;
    }

    for (const postion of toBeConvertedPositions) {
      const [pRow, pCol] = postion;
      matrix[pRow][pCol] = matrix[pRow][pCol] * -1;
    }

    toBeConvertedPositions = [];
    passCount++;
  }

  return passCount;
}

const checkNeigbours = (row, col, matrix) => {
  let hasPositive = false;
  const rowLength = matrix.length;
  const colLength = matrix[0].length;

  // up
  if (row - 1 >= 0 && matrix[row - 1][col] > 0) {
    hasPositive = true;
    return hasPositive;
  }

  // down
  if (row + 1 < rowLength && matrix[row + 1][col] > 0) {
    hasPositive = true;
    return hasPositive;
  }

  // left
  if (col - 1 >= 0 && matrix[row][col - 1] > 0) {
    hasPositive = true;
    return hasPositive;
  }

  // right
  if (col + 1 < colLength && matrix[row][col + 1] > 0) {
    hasPositive = true;
    return hasPositive;
  }

  return hasPositive;
};

console.log(
  minimumPassesOfMatrix([
    [0, -2, -1],
    [-5, 2, 0],
    [-6, -2, 0],
  ])
);
