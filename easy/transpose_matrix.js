/**
 * @description Solution to transpose the matrix using 2 for loops
 * @param {number[][]} matrix
 * @returns {number[][]}
 * @complexities Time => O(n * m) | Space => O(n * m)
 */
const transposeMatrix = (matrix) => {
  const transposeMatrix = [];
  for (let col = 0; col < matrix[0].length; col++) {
    const newRow = [];
    for (let row = 0; row < matrix.length; row++) {
      newRow.push(matrix[row][col]);
    }
    transposeMatrix.push(newRow);
  }

  return transposeMatrix;
};

console.table(
  transposeMatrix([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
