/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  const potentialRow = getRow();
  if (potentialRow === -1) return false;

  return search(potentialRow);

  /**
   * Find the potential row
   * @returns {number}
   */
  function getRow() {
    let low = 0;
    let high = rowLength - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (target >= matrix[mid][0] && target <= matrix[mid][colLength - 1])
        return mid;
      else if (target < matrix[mid][0]) high = mid - 1;
      else low = mid + 1;
    }

    return -1;
  }

  /**
   * Run binary search on the array finding target
   * @param {number} potentialRow
   * @returns {boolean}
   */
  function search(potentialRow) {
    let low = 0;
    let high = colLength - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (matrix[potentialRow][mid] === target) return true;
      else if (target > matrix[potentialRow][mid]) low = mid + 1;
      else high = mid - 1;
    }

    return false;
  }
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ],
    3
  )
);
