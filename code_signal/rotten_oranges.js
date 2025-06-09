/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  // 2 is rotten orange
  // 1 is fresh orange
  // create a queue ds to keep the rotten oranges
  // track the fresh oranges count
  // traverse the grid and push the rotten orange to a queue and fresh ones to set
  // if the set is empty we return 0 minutes
  // perform the BFS on the queue and keep shifting the rotten oranges and track the min

  let freshOranges = 0;
  const queue = [];
  const ROWS = grid.length;
  const COLS = grid[0].length;
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const val = grid[row][col];
      if (val === 2) {
        // rotten - so we push to queue
        queue.push([row, col]);
      } else if (val === 1) {
        // fresh - so increment the count
        freshOranges++;
      }
    }
  }

  let minutes = 0;
  if (freshOranges === 0) return minutes;
  while (queue.length > 0) {
    const queueSize = queue.length;
    minutes++;
    for (let i = 0; i < queueSize; i++) {
      const [row, col] = queue.shift();
      const neigbours = getNeighbours(row, col);
      for (const neigbour of neigbours) {
        const [neigbourRow, neigbourCol] = neigbour;
        // found a fresh orange
        if (grid[neigbourRow][neigbourCol] === 1) {
          grid[neigbourRow][neigbourCol] = 2; // Fresh to rotten
          queue.push([neigbourRow, neigbourCol]);
          freshOranges--;
          if (freshOranges === 0) return minutes; // no fresh oranges remaining
        }
      }
    }
  }

  function getNeighbours(row, col) {
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

  if (freshOranges === 0) return minutes; // no fresh oranges remaining
  else return -1; // Atleast one fresh found
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
