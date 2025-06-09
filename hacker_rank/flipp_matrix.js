function flippingMatrix(matrix) {
  const n = matrix.length / 2;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const topLeft = matrix[i][j];
      const topRight = matrix[i][2 * n - j - 1];
      const bottomLeft = matrix[2 * n - i - 1][j];
      const bottomRight = matrix[2 * n - i - 1][2 * n - j - 1];

      sum += Math.max(topLeft, topRight, bottomLeft, bottomRight);
    }
  }

  return sum;
}

console.log(
  flippingMatrix([
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108],
  ])
);
