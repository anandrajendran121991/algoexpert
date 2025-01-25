/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const rowLength = board.length;
  const colLength = board[0].length;
  const auxillaryBoard = constructAuxillaryBoard(rowLength, colLength);
  const LIVE = 1;
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      const currentValue = board[row][col];
      const neigbours = getNeigbours(board, row, col);

      if (currentValue === LIVE) {
        if (neigbours[1] < 2) {
          auxillaryBoard[row][col] = "dead"; // under population
        } else if (neigbours[1] > 3) {
          auxillaryBoard[row][col] = "dead"; // over population
        }
      } else {
        if (neigbours[1] === 3) {
          auxillaryBoard[row][col] = "alive"; // reproduction
        }
      }
    }
  }

  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (auxillaryBoard[row][col] === "alive") {
        board[row][col] = 1;
      } else if (auxillaryBoard[row][col] === "dead") {
        board[row][col] = 0;
      }
    }
  }

  return board;
};

const getNeigbours = (board, row, col) => {
  const hashMap = { 1: 0 };
  const rowLength = board.length;
  const colLength = board[0].length;

  // up
  if (row - 1 >= 0) {
    hashMap[board[row - 1][col]] += 1;
  }

  // down
  if (row + 1 < rowLength) {
    hashMap[board[row + 1][col]] += 1;
  }

  // left
  if (col - 1 >= 0) {
    hashMap[board[row][col - 1]] += 1;
  }

  // right
  if (col + 1 < colLength) {
    hashMap[board[row][col + 1]] += 1;
  }

  // up left
  if (row - 1 >= 0 && col - 1 >= 0) {
    hashMap[board[row - 1][col - 1]] += 1;
  }

  // up right
  if (row - 1 >= 0 && col + 1 < colLength) {
    hashMap[board[row - 1][col + 1]] += 1;
  }

  // down left
  if (row + 1 < rowLength && col - 1 >= 0) {
    hashMap[board[row + 1][col - 1]] += 1;
  }

  // down right
  if (row + 1 < rowLength && col + 1 < colLength) {
    hashMap[board[row + 1][col + 1]] += 1;
  }

  return hashMap;
};

const constructAuxillaryBoard = (rowLength, colLength) => {
  const array = [];
  for (let row = 0; row < rowLength; row++) {
    let newRow = [];
    for (let col = 0; col < colLength; col++) {
      newRow.push(0);
    }
    array.push(newRow);
  }
  return array;
};

console.table(
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ])
);
