/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      const currentValue = matrix[row][col]; // 1 or 0
      if (currentValue === 0) {
        updateRowCols(matrix, row, col);
      }
    }
  }

  // update the values to 0 from false
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      const currentValue = matrix[row][col];
      if (currentValue == "false") {
        matrix[row][col] = 0;
      }
    }
  }

  return matrix;
};

const updateRowCols = (matrix, row, col) => {
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  matrix[row][col] = "false"; // set the current positon to false
  // up
  let i = row;
  while (i - 1 >= 0) {
    if (matrix[i - 1][col] !== 0) {
      matrix[i - 1][col] = "false";
    }
    i--;
  }

  let j = row;
  // down
  while (j + 1 < rowLength) {
    if (matrix[j + 1][col] !== 0) {
      matrix[j + 1][col] = "false";
    }
    j++;
  }

  let k = col;
  // left
  while (k - 1 >= 0) {
    if (matrix[row][k - 1] !== 0) {
      matrix[row][k - 1] = "false";
    }
    k--;
  }

  let l = col;
  // right
  while (l + 1 < colLength) {
    if (matrix[row][l + 1] !== 0) {
      matrix[row][l + 1] = "false";
    }
    l++;
  }
};

console.table(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

// Loop through the matrix and
