/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rowLength = board.length;
  const colLength = board[0].length;

  function dfs(idx, row, col) {
    if (idx === word.length) {
      return true;
    }

    if (
      row < 0 ||
      row > rowLength ||
      col < 0 ||
      col > colLength ||
      board[row][col] === "#" ||
      board[row][col] !== word[idx]
    )
      return false;

    const temp = board[row][col];
    board[row][col] = "#";

    if (
      dfs(idx + 1, row - 1, col) ||
      dfs(idx + 1, row + 1, col) ||
      dfs(idx + 1, row, col - 1) ||
      dfs(idx + 1, row, col + 1)
    )
      return true;
    board[row][col] = temp;
  }

  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      const res = dsf(0, row, col);
      if (res) return true;
    }
  }

  return false;
};
