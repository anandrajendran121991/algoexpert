function minimumTotal(triangle) {
  const n = triangle.length;

  // Start by initializing dp with the values of the last row of the triangle
  let dp = [...triangle[n - 1]]; // Copy the last row into dp

  // Iterate from the second-last row to the first row
  for (let row = n - 2; row >= 0; row--) {
    for (let col = 0; col <= row; col++) {
      // Update dp[col] to be the minimum path sum from this position
      dp[col] = triangle[row][col] + Math.min(dp[col], dp[col + 1]);
    }
  }

  // The result is stored in dp[0], which represents the minimum path sum from top to bottom
  return dp[0];
}

// Example usage:
const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];

console.log(minimumTotal(triangle)); // Output: 11
