/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  const m = s1.length;
  const n = s2.length;
  if (m + n !== s3.length) return false;
  let dp = constructDP(m, n);
  dp[m][n] = true;
  for (let i = m; i >= 0; i--) {
    for (let j = n; j >= 0; j--) {
      if (i < m && s1[i] === s3[i + j] && dp[i + 1][j]) dp[i][j] = true;
      if (j < n && s2[j] === s3[i + j] && dp[i][j + 1]) dp[i][j] = true;
    }
  }
  return dp[0][0];
};

const constructDP = (m, n) => {
  const dp = [];
  for (let i = 0; i < m + 1; i++) {
    const newRow = [];
    for (let j = 0; j < n + 1; j++) {
      newRow.push(false);
    }
    dp[i] = newRow;
  }
  return dp;
};

console.log(isInterleave("aabcc", "dbbca", "aadbbdbcac"));
