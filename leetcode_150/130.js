/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (matrix) {
  // Write your code here.
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  const auxillaryMatirx = getAuxillaryMatrix(rowLength, colLength);

  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      const isRowBorder = row === 0 || row === rowLength - 1 ? true : false;
      const isColBorder = col === 0 || col === colLength - 1 ? true : false;
      const isBorder = isRowBorder || isColBorder;
      if (isBorder && matrix[row][col] === "O") {
        depthFirstSearch(matrix, row, col, auxillaryMatirx);
      }
    }
  }

  for (let row = 1; row < rowLength - 1; row++) {
    for (let col = 1; col < colLength - 1; col++) {
      if (auxillaryMatirx[row][col] === false) {
        matrix[row][col] = "X";
      }
    }
  }

  return matrix;
};

const depthFirstSearch = (matrix, row, col, auxillaryMatirx) => {
  const stack = [[row, col]];
  while (stack.length > 0) {
    const currentPosition = stack.pop();
    const [currentRow, currentCol] = currentPosition;
    const alreadyVisited = auxillaryMatirx[currentRow][currentCol];
    if (alreadyVisited) {
      continue;
    }
    auxillaryMatirx[currentRow][currentCol] = true;
    const neighbours = getNeigbhours(matrix, currentRow, currentCol);
    for (const neighbour of neighbours) {
      const [neighboursRow, neighboursCol] = neighbour;
      if (matrix[neighboursRow][neighboursCol] == "O") {
        stack.push(neighbours);
      }
    }
  }
};

const getNeigbhours = (matrix, row, col) => {
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  const neighbours = [];

  // up
  if (row - 1 >= 0) {
    neighbours.push([row - 1, col]);
  }

  // down
  if (row + 1 < rowLength) {
    neighbours.push([row + 1, col]);
  }

  // left
  if (col - 1 >= 0) {
    neighbours.push([row, col - 1]);
  }

  // down
  if (col + 1 < colLength) {
    neighbours.push([row, col + 1]);
  }

  return neighbours;
};

const getAuxillaryMatrix = (rowLength, colLength) => {
  const auxillaryMatirx = [];
  for (let row = 0; row < rowLength; row++) {
    const newRow = [];
    for (let col = 0; col < colLength; col++) {
      newRow.push(false);
    }
    auxillaryMatirx.push(newRow);
  }
  return auxillaryMatirx;
};

console.log(
  solve([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ])
);
