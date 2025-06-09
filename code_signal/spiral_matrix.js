/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const ROWS = matrix.length;
  const COLS = matrix[0].length;
  let startCol = 0;
  let endCol = COLS - 1;
  let startRow = 0;
  let endRow = ROWS - 1;
  const result = [];
  while (startRow < ROWS && startCol < COLS) {
    for (let col = startCol; col <= endCol; col++) {
      result.push(matrix[startRow][col]);
    }

    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(matrix[row][endCol]);
    }

    for (let col = endCol - 1; col > startCol; col--) {
      if (startRow === endRow) break;
      result.push(matrix[endRow][col]);
    }

    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break;
      result.push(matrix[row][startCol]);
    }

    startCol++;
    startRow++;
    endCol--;
    endRow--;
  }

  return result;
};

console.log(
  spiralOrder([
    [2, 5, 8],
    [4, 0, -1],
  ])
);
