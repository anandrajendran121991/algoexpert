// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */
// var convert = function (s, numRows) {
//   if (numRows === 1 || s.length < numRows) return s;
//   const hashMap = {};
//   let zigzag = "";
//   for (let i = 0; i < numRows; i++) {
//     hashMap[i] = "";
//   }
//   let j = 0;
//   let direction = true;
//   let hashMapIdx = 0;
//   while (j < s.length) {
//     if (hashMapIdx === 0) {
//       hashMap[hashMapIdx] += s[j];
//       direction = true;
//       hashMapIdx++;
//     } else if (hashMapIdx === numRows - 1) {
//       hashMap[hashMapIdx] += s[j];
//       direction = false;
//       hashMapIdx--;
//     } else {
//       if (direction) {
//         hashMap[hashMapIdx] += s[j];
//         hashMapIdx++;
//       } else {
//         hashMap[hashMapIdx] += s[j];
//         hashMapIdx--;
//       }
//     }
//     j++;
//   }

//   for (const value of Object.values(hashMap)) {
//     zigzag += value;
//   }

//   return zigzag;
// };

var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;

  // Create a 2D matrix with numRows rows
  const matrix = Array.from({ length: numRows }, () => []);

  let row = 0; // Start at the top row
  let direction = 1; // 1 means moving down, -1 means moving up

  // Fill the matrix in zigzag order
  for (const char of s) {
    matrix[row].push(char);

    // Change direction when hitting the top or bottom row
    if (row === 0) direction = 1; // Move down
    else if (row === numRows - 1) direction = -1; // Move up

    row += direction;
  }

  // Read the matrix row by row
  let result = "";
  for (const r of matrix) {
    result += r.join("");
  }

  return result;
};

// Example Usage
console.log(convert("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"
// console.log(convert("PAYPALISHIRING", 4)); // Output: "PINALSIGYAHRPI"

// console.log(convert("PAYPALISHIRING", 3));
