/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rowLength = board.length;
  const colLength = board[0].length;
  const hashMap = {};

  for (let row = 0; row < rowLength; row++) {
    for (col = 0; col < colLength; col++) {
      let currentValue = board[row][col];
      if (currentValue !== ".") {
        let rowValue = currentValue + "found in " + row;
        let colValue = currentValue + "found in " + col;
        let subset =
          currentValue +
          "found in " +
          Math.floor(row / 3) +
          "-" +
          Math.floor(col / 3);
        if (rowValue in hashMap || colValue in hashMap || subset in hashMap) {
          return false;
        }
        hashMap[rowValue] = true;
        hashMap[colValue] = true;
        hashMap[subset] = true;
      }
    }
  }
  return true;
};

console.log(
  isValidSudoku([
    ["5", "5", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
