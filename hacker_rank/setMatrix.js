/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * @complexities Time => O(m * n) + O(m * n) + O(m * n) + O(m + n) || Space => O(m * n)
 */
var setZeroesNaive = function (matrix) {
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  const auxillaryMatrix = [];
  // Time => O(m * n) || Space => O(m * n)
  for (let row = 0; row < rowLength; row++) {
    const newRow = [];
    for (let col = 0; col < colLength; col++) {
      newRow.push(matrix[row][col]);
    }
    auxillaryMatrix.push(newRow);
  }

  // Time => O(m * n)
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (matrix[row][col] === 0) {
        updateMatrix(row, col);
      }
    }
  }

  // Time => O(m + n)
  function updateMatrix(row, col) {
    for (let i = 0; i < colLength; i++) {
      auxillaryMatrix[row][i] = 0;
    }

    for (let j = 0; j < rowLength; j++) {
      auxillaryMatrix[j][col] = 0;
    }
  }

  // Time => O(m * n)
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      matrix[row][col] = auxillaryMatrix[row][col];
    }
  }
};

const setZeroesSpace = (matrix) => {
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  const rowFlag = new Array(rowLength).fill(1);
  const colFlag = new Array(colLength).fill(1);

  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (matrix[row][col] === 0) {
        rowFlag[row] = 0;
        colFlag[col] = 0;
      }
    }
  }

  for (let row = 0; row < rowLength; row++) {
    if (rowFlag[row] === 0) {
      for (let col = 0; col < colLength; col++) {
        matrix[row][col] = 0;
      }
    }
  }

  for (let col = 0; col < colLength; col++) {
    if (colFlag[col] === 0) {
      for (let row = 0; row < rowLength; row++) {
        matrix[row][col] = 0;
      }
    }
  }

  return matrix;
};

const setZeroesInPlace = (matrix) => {
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  let rowFlag = 1;
  let colFlag = 1;

  // set the rowFlag to 0 if atleast one zero
  for (let col = 0; col < colLength; col++) {
    if (matrix[0][col] === 0) {
      rowFlag = 0;
      break;
    }
  }

  // set the colFlag to 0 if atleast one zero
  for (let row = 0; row < rowLength; row++) {
    if (matrix[row][0] === 0) {
      colFlag = 0;
      break;
    }
  }

  for (let row = 1; row < rowLength; row++) {
    for (let col = 1; col < colLength; col++) {
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }

  if (rowFlag === 0) {
    for (let col = 0; col < colLength; col++) {
      matrix[0][col] = 0;
    }
  }

  if (colFlag === 0) {
    for (let row = 0; row < rowLength; row++) {
      matrix[row][0] = 0;
    }
  }

  return matrix;
};

console.log(
  setZeroesInPlace([
    [1, 0, 1],
    [1, 0, 1],
    [0, 1, 1],
  ])
);
