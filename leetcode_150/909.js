/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  const n = board.length;
  board.reverse();
  const integerToPosition = (num) => {
    const row = Math.floor((num - 1) / n);
    const col = (num - 1) % n;
    const actualCol = row % 2 === 0 ? col : n - 1 - col;
    return [row, actualCol];
  };

  const visited = new Set();
  const queue = [[1, 0]]; // square, moves
  visited.add(1);
  while (queue.length > 0) {
    const [square, moves] = queue.shift();
    if (square === n * n) return moves;
    for (let i = 1; i <= 6; i++) {
      let next = square + i;
      if (next > n * n) return moves;
      const [row, col] = integerToPosition(next);
      if (board[row][col] !== -1) {
        next = board[row][col];
      }
      if (!visited.has(next)) {
        visited.add(next);
        queue.push([next, moves + 1]);
      }
    }
  }

  return -1;
};

console.log(
  snakesAndLadders([
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 35, -1, -1, 13, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 15, -1, -1, -1, -1],
  ])
);
