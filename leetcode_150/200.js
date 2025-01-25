/**
 * @param {character[][]} matrix
 * @return {number}
 */
var numIslands = function (matrix) {
  const visited = new Set(); // stores pair of row & col which are already visited
  let islands = 0;
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      let value = matrix[row][col];
      if (value == 0) continue; // if the value is 0 then we just continue
      if (visited.has(`${row},${col}`)) continue; // if the current pos is already visited
      islands += depthFirstSearchIsland(
        row,
        col,
        matrix,
        visited,
        rowLength,
        colLength
      );
    }
  }

  return islands;
};

const depthFirstSearchIsland = (
  row,
  col,
  matrix,
  visited,
  rowLength,
  colLength
) => {
  const stack = [[row, col]]; // make sure we check for already visited and not 0
  const key = `${row},${col}`;
  visited.add(key);
  while (stack.length > 0) {
    const [currentRow, currentCol] = stack.pop();
    const neighbours = [
      [-1, 0], // up
      [1, 0], // down
      [0, -1], // left
      [0, 1], // right
    ];

    for (const [dx, dy] of neighbours) {
      let newRow = currentRow + dx;
      let newCol = currentCol + dy;
      if (
        newRow >= rowLength ||
        newRow < 0 ||
        newCol >= colLength ||
        newCol < 0
      )
        continue;
      let value = matrix[newRow][newCol];
      if (value == 0) continue; // if the value is 0 then we just continue
      if (visited.has(`${newRow},${newCol}`)) continue; // if the current pos is already visited
      visited.add(`${newRow},${newCol}`);
      stack.push([newRow, newCol]);
    }
  }
  return 1;
};

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
