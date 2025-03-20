function revealMinesweeper(board, row, col) {
  function dfs(row, col) {
    const currentVal = board[row][col];
    if (currentVal === "M") {
      // we hit the mine so lets upadate the M to X and return the board
      board[row][col] = "X";
      return board;
    }
    if (currentVal === "H") {
      let count = 0;
      const neighbours = getNeighbours(row, col, board);
      for (const [nRow, nCol] of neighbours) {
        if (board[nRow][nCol] === "M") count++;
      }

      if (count === 0) {
        board[row][col] = "0";
        for (const [nRow, nCol] of neighbours) {
          if (board[nRow][nCol] === "H") {
            dfs(nRow, nCol);
          }
        }
      } else {
        board[row][col] = count.toString();
      }
    }

    return board;
  }

  function getNeighbours(row, col, board) {
    const neighours = [];
    const rowLength = board.length;
    const colLength = board[0].length;

    // All 8 possible directions: [row_offset, col_offset]
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1], // Up, Down, Left, Right
      [-1, -1],
      [1, 1],
      [1, -1],
      [-1, 1], // Diagonals
    ];

    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;

      if (
        newRow >= 0 &&
        newRow < rowLength &&
        newCol >= 0 &&
        newCol < colLength
      ) {
        neighours.push([newRow, newCol]);
      }
    }

    return neighours;
  }

  dfs(row, col);
  return board;
}

console.log(
  revealMinesweeper(
    [
      ["H", "H", "H", "H", "M"],
      ["H", "1", "M", "H", "1"],
      ["H", "H", "H", "H", "H"],
      ["H", "H", "H", "H", "H"],
    ],
    3,
    4
  )
);
