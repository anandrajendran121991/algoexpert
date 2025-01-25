function riverSizes(matrix) {
  // Write your code here.
  const riverSize = [];
  const visitedPositions = new Set();
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      let currentValue = matrix[row][col];
      // if the current value is not a river we just continue to the next position
      if (currentValue !== 1) {
        continue;
      }

      depthFirstSearchRiver(matrix, row, col, visitedPositions, riverSize);
    }
  }

  return riverSize;
}

function depthFirstSearchRiver(matrix, row, col, visitedPositions, riverSize) {
  let size = 0;
  const stack = [[row, col]]; // push the first position to the stack
  while (stack.length > 0) {
    const currentPosition = stack.pop(); // remove top of the stack
    const [currentRow, currentCol] = currentPosition;
    const currentValue = matrix[currentRow][currentCol];

    if (visitedPositions.has(`${currentRow},${currentCol}`)) {
      continue;
    }

    visitedPositions.add(`${currentRow},${currentCol}`);

    if (currentValue === 0) {
      continue;
    }

    size++;
    const neighbours = getNeighbours(matrix, currentRow, currentCol);
    for (const neighbour of neighbours) {
      stack.push(neighbour);
    }
  }

  if (size > 0) {
    riverSize.push(size);
  }
}

function getNeighbours(matrix, row, col) {
  const neighbours = [];
  const rowLength = matrix.length;
  const colLength = matrix[0].length;

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

  // right
  if (col + 1 < colLength) {
    neighbours.push([row, col + 1]);
  }

  return neighbours;
}

console.log(
  riverSizes([
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
  ])
);
