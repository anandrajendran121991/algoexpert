function numberOfWaysToTraverseGraph(width, height) {
  const tabulation = [];
  for (let row = 0; row < height; row++) {
    const newRow = [];
    for (let col = 0; col < width; col++) {
      newRow.push(0);
    }
    tabulation[row] = newRow;
  }

  tabulation[0][0] = 1;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      // up and left position
      if (row - 1 >= 0 && col - 1 >= 0) {
        tabulation[row][col] +=
          tabulation[row - 1][col] + tabulation[row][col - 1];
      } else if (row - 1 >= 0) {
        tabulation[row][col] += tabulation[row - 1][col];
      } else if (col - 1 >= 0) {
        tabulation[row][col] += tabulation[row][col - 1];
      }
    }
  }

  return tabulation[height - 1][width - 1];
}

console.log(numberOfWaysToTraverseGraph(4, 3));
