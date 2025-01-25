/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
  const rowLength = maze.length;
  const colLength = maze[0].length;
  const queue = [[entrance[0], entrance[1], 0]];
  maze[entrance[0]][entrance[1]] = "+"; // mark the entrance as visited
  while (queue.length > 0) {
    const [row, col, steps] = queue.shift();

    if (
      (row === 0 ||
        row === rowLength - 1 ||
        col === 0 ||
        col === colLength - 1) &&
      !(row === entrance[0] && col === entrance[1])
    ) {
      return steps;
    }

    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    for (const [dx, dy] of directions) {
      let newRow = dx + row;
      let newCol = dy + col;
      // Check for valid position and not visited
      if (
        newRow >= 0 &&
        newCol >= 0 &&
        newRow < rowLength &&
        newCol < colLength &&
        maze[newRow][newCol] === "."
      ) {
        maze[newRow][newCol] = "+"; // mark as visited
        queue.push([newRow, newCol, steps + 1]);
      }
    }
  }

  return -1;
};

console.log(
  nearestExit(
    [
      ["+", "+", ".", "+"],
      [".", ".", ".", "+"],
      ["+", "+", "+", "."],
    ],
    [1, 2]
  )
);
