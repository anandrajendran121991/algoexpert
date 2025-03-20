/**
 * @param {number[][]} board
 * @complexities = Time => O(m * n), Space => O(m * n)
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const LIVE = 1;
  const DEAD = 0;
  const rowLength = board.length;
  const colLength = board[0].length;
  const auxilaryBoard = constructAuxilaryBoard(rowLength, colLength, board);
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      const current = board[row][col];
      const liveNeigbours = getLiveNeigbours(
        row,
        col,
        rowLength,
        colLength,
        board
      );
      if (current === LIVE) {
        // under population or over population
        if (liveNeigbours < 2 || liveNeigbours > 3) {
          auxilaryBoard[row][col] = DEAD;
        }
      } else {
        // reproduction
        if (liveNeigbours === 3) auxilaryBoard[row][col] = LIVE;
      }
    }
  }

  // Rewrite the board values from auxilary
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      board[row][col] = auxilaryBoard[row][col];
    }
  }
};

/**
 * @description Get the live count of the 8 neigbours from the current position
 * @param {*} row
 * @param {*} col
 * @param {*} rowLength
 * @param {*} colLength
 * @param {*} board
 * @returns {*} Number
 */
const getLiveNeigbours = (row, col, rowLength, colLength, board) => {
  let liveCount = 0;
  const directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
    [-1, 1], // up right
    [-1, -1], // up left
    [1, 1], // down right
    [1, -1], // down left
  ];

  for (let [dr, dc] of directions) {
    const newRow = dr + row;
    const newCol = dc + col;
    if (
      newRow >= 0 &&
      newCol >= 0 &&
      newRow < rowLength &&
      newCol < colLength
    ) {
      if (board[newRow][newCol] === 1) {
        liveCount++;
      }
    }
  }

  return liveCount;
};

/**
 * @description Construct the auxillary board using the same values from board
 * @param {*} rowLength
 * @param {*} colLength
 * @param {*} board
 * @returns [][]
 */
const constructAuxilaryBoard = (rowLength, colLength, board) => {
  const auxilary = [];
  for (let row = 0; row < rowLength; row++) {
    const newRow = [];
    for (col = 0; col < colLength; col++) {
      newRow.push(board[row][col]);
    }
    auxilary[row] = newRow;
  }

  return auxilary;
};

console.log(
  gameOfLife([
    [0, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
    [0, 0, 0],
  ])
);
