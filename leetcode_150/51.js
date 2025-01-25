/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const result = [];
  const board = constructBoard(n);
  const col = new Set();
  const positiveDiagonal = new Set(); // r + c
  const negativeDiagonal = new Set(); // r - c

  const backTrack = (r) => {
    if (r === n) {
      const copy = [];
      let i = 0;
      while (i < board.length) {
        copy.push(board[i].join(""));

        i++;
      }
      result.push(copy);
      return;
    }

    for (let c = 0; c < n; c++) {
      // Check if the column or diagonals are already attacked
      if (
        col.has(c) ||
        positiveDiagonal.has(r + c) ||
        negativeDiagonal.has(r - c)
      ) {
        continue;
      }

      // Place the queen
      col.add(c);
      positiveDiagonal.add(r + c);
      negativeDiagonal.add(r - c);
      board[r][c] = "Q";

      // Recur for the next row
      backTrack(r + 1);

      // Remove the queen (backtrack)
      col.delete(c);
      positiveDiagonal.delete(r + c);
      negativeDiagonal.delete(r - c);
      board[r][c] = ".";
    }
  };

  backTrack(0);

  return result;
};

// Helper function to construct the board
const constructBoard = (n) => {
  return new Array(n).fill(0).map(() => new Array(n).fill("."));
};

console.table(solveNQueens(4));
