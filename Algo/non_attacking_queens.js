function nonAttackingQueens(n) {
  // Write your code here.

  const posDiagonalHash = new Set();
  const negativeDiagonalHash = new Set();
  const colHash = new Set();
  let count = 0;

  function backTrack(row) {
    if (row === n) {
      count++;
      return;
    }

    for (let col = 0; col < n; col++) {
      if (
        colHash.has(col) ||
        posDiagonalHash.has(row + col) ||
        negativeDiagonalHash.has(row - col)
      ) {
        continue;
      }

      colHash.add(col);
      posDiagonalHash.add(row + col);
      negativeDiagonalHash.add(row - col);
      backTrack(row + 1);
      colHash.delete(col);
      posDiagonalHash.delete(row + col);
      negativeDiagonalHash.delete(row - col);
    }
  }

  backTrack(0);

  return count;
}

console.log(nonAttackingQueens(4));
