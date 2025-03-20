function longestCommonSubsequence(str1, str2) {
  // Write your code here.
  const tabulation = [];
  const res = [];
  for (let i = 0; i < str1.length + 1; i++) {
    const newRow = [];
    for (let j = 0; j < str2.length + 1; j++) {
      newRow.push(0);
    }
    tabulation[i] = newRow;
  }

  for (let row = str1.length - 1; row >= 0; row--) {
    for (let col = str2.length - 1; col >= 0; col--) {
      if (str1[row] === str2[col]) {
        tabulation[row][col] = 1 + tabulation[row + 1][col + 1];
      } else {
        tabulation[row][col] = Math.max(
          tabulation[row + 1][col],
          tabulation[row][col + 1]
        );
      }
    }
  }

  // Backtrack to construct LCS
  let row = 0;
  let col = 0;

  while (row < str1.length && col < str2.length) {
    if (str1[row] === str2[col]) {
      res.push(str1[row]); // Add the matching character
      row++;
      col++;
    } else if (tabulation[row + 1][col] >= tabulation[row][col + 1]) {
      row++; // Move down
    } else {
      col++; // Move right
    }
  }

  return res.join("");
}

console.log(longestCommonSubsequence("ZXVVYZW", "XKYKZPW"));
