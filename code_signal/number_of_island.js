const numIslands = (grid) => {
  let islands = 0;
  const ROWS = grid.length;
  const COLS = grid[0].length;
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (grid[row][col] === "0") continue;
      dfs(row, col);
      islands++;
    }
  }

  function dfs(row, col) {
    const stack = [[row, col]];
    while (stack.length > 0) {
      const [currentRow, currentCol] = stack.pop();
      grid[currentRow][currentCol] = "0";
      const neigbours = getNeigbours(currentRow, currentCol);
      for (const neigbour of neigbours) {
        const [neigbourRow, neigbourCol] = neigbour;
        if (grid[neigbourRow][neigbourCol] === "0") continue;
        grid[newneigbourRowRow][neigbourCol] = "0";
        stack.push([neigbourRow, neigbourCol]);
      }
    }
  }

  function getNeigbours(row, col) {
    const neigbours = [];
    // top
    if (row - 1 >= 0) neigbours.push([row - 1, col]);

    // down
    if (row + 1 < ROWS) neigbours.push([row + 1, col]);

    // left
    if (col - 1 >= 0) neigbours.push([row, col - 1]);

    // right
    if (col + 1 < COLS) neigbours.push([row, col + 1]);

    return neigbours;
  }

  return islands;
};

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);
