/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // transpose
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  for (let row = 0; row < rowLength; row++) {
    for (let col = row; col < colLength; col++) {
      const temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }

  // two pointer
  for (let row = 0; row < rowLength; row++) {
    let colStart = 0;
    let colEnd = colLength - 1;
    while (colStart < colEnd) {
      const temp = matrix[row][colStart];
      matrix[row][colStart] = matrix[row][colEnd];
      matrix[row][colEnd] = temp;
      colStart++;
      colEnd--;
    }
  }

  return matrix;
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
