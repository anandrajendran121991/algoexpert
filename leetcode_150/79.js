/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rowLength = board.length;
  const colLength = board[0].length;
  const visited = getVisitedBoard(rowLength, colLength);
  let startIdx = 0;
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (board[row][col] === word[startIdx]) {
        if (dfs(startIdx, row, col, board, word, visited)) return true;
      }
    }
  }

  return false;
};

const dfs = (startIdx, row, col, board, word, visited) => {
  if (startIdx === word.length) return true;

  // Boundary checks and ensuring the cell is not already visited
  if (
    row < 0 ||
    row >= board.length ||
    col < 0 ||
    col >= board[0].length ||
    board[row][col] !== word[startIdx] ||
    visited[row][col]
  ) {
    return false;
  }

  visited[row][col] = true;
  const neigbours = getNeigbours(row, col, board);
  for (const neigbour of neigbours) {
    const [neigbourRow, neigbourCol] = neigbour;

    const result = dfs(
      startIdx + 1,
      neigbourRow,
      neigbourCol,
      board,
      word,
      visited
    );
    if (result) {
      return true;
    }
  }
  visited[row][col] = false;
  return false;
};

const getNeigbours = (row, col, board) => {
  const rowLength = board.length;
  const colLength = board[0].length;
  const neigbours = [];
  // up
  if (row - 1 >= 0) {
    neigbours.push([row - 1, col]);
  }

  // down
  if (row + 1 < rowLength) {
    neigbours.push([row + 1, col]);
  }

  // left
  if (col - 1 >= 0) {
    neigbours.push([row, col - 1]);
  }

  // right
  if (col + 1 < colLength) {
    neigbours.push([row, col + 1]);
  }

  return neigbours;
};

const getVisitedBoard = (rowLength, colLength) => {
  const visited = [];
  for (let row = 0; row < rowLength; row++) {
    const newRow = [];
    for (let col = 0; col < colLength; col++) {
      newRow.push(false);
    }
    visited[row] = newRow;
  }

  return visited;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
