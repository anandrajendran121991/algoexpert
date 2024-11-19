/**
 * @description Solution by iterating the whole matrix by setting boundaries for rows and cols
 * @param {number[][]} matrix
 * @returns {number[]}
 * @complexities Time => O(n) | Space => O(n)
 */
const spiralTraverse = (matrix) => {
  const spiralMatrix = [];
  let startRow = 0;
  let endRow = matrix.length - 1;
  let startCol = 0;
  let endCol = matrix[0].length - 1;
  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      spiralMatrix.push(matrix[startRow][col]);
    }
    for (let row = startRow + 1; row <= endRow; row++) {
      spiralMatrix.push(matrix[row][endCol]);
    }
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) {
        break;
      }
      spiralMatrix.push(matrix[endRow][col]);
    }
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) {
        break;
      }
      spiralMatrix.push(matrix[row][startCol]);
    }

    startCol++;
    endCol--;
    startRow++;
    endRow--;
  }

  return spiralMatrix;
};

console.log(
  spiralTraverse([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ])
);
