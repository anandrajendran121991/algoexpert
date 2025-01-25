/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const spiralOrder = [];
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  let rowStart = 0;
  let colStart = 0;
  let rowEnd = rowLength - 1;
  let colEnd = colLength - 1;
  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let col = colStart; col <= colEnd; col++) {
      spiralOrder.push(matrix[rowStart][col]);
    }

    for (row = rowStart + 1; row <= rowEnd; row++) {
      spiralOrder.push(matrix[row][colEnd]);
    }

    for (let col = colEnd - 1; col >= colStart; col--) {
      // Edge cases
      if (rowStart === rowEnd) {
        break;
      }
      spiralOrder.push(matrix[rowEnd][col]);
    }

    for (let row = rowEnd - 1; row > rowStart; row--) {
      if (colStart === colEnd) {
        break;
      }
      spiralOrder.push(matrix[row][colStart]);
    }

    rowStart++;
    rowEnd--;
    colStart++;
    colEnd--;
  }

  return spiralOrder;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ])
);
