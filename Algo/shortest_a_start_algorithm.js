function aStarAlgorithm(startRow, startCol, endRow, endCol, graph) {
  const rowLength = graph.length;
  const colLength = graph[0].length;
  const visited = new Set();

  const queue = [[startRow, startCol, []]];
  const position = `${startRow},${startCol}`;
  visited.add(position);
  while (queue.length > 0) {
    let queueSize = queue.length;
    const [row, col, path] = queue.shift();
    const currentPath = [...path, [row, col]];
    if (row === endRow && col === endCol) {
      return currentPath;
    }

    for (let i = 0; i < queueSize; i++) {
      const neigbours = getNeigbours(row, col, rowLength, colLength);
      for (const neigbour of neigbours) {
        const [neigbourRow, neigbourCol] = neigbour;
        const neigbourPosition = `${neigbourRow},${neigbourCol}`;
        if (
          graph[neigbourRow][neigbourCol] === 0 &&
          !visited.has(neigbourPosition)
        ) {
          queue.push([neigbourRow, neigbourCol, currentPath]);
          visited.add(neigbourPosition);
        }
      }
    }
  }

  return [];
}

const getNeigbours = (row, col, rowLength, colLength) => {
  const neigbours = [];
  // up
  if (row - 1 >= 0) {
    neigbours.push([row - 1, col]);
  }

  // down
  if (row + 1 < rowLength) {
    neigbours.push([row + 1, col]);
  }

  // right
  if (col + 1 < colLength) {
    neigbours.push([row, col + 1]);
  }

  // left
  if (col - 1 >= 0) {
    neigbours.push([row, col - 1]);
  }

  return neigbours;
};

console.log(
  aStarAlgorithm(0, 1, 4, 3, [
    [0, 0, 0, 0, 0], // 0
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1],
    [0, 0, 0, 0, 0],
  ])
);
