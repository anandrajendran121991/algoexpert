var searchMatrix = function (matrix, target) {
   // Write your code here.
   let row = 0;
   let col = matrix[0].length - 1;
 
   while (row < matrix.length && col >= 0) {
     if (matrix[row][col] > target) {
       col--
     } else if (matrix[row][col] < target) {
       row++
     } else {
       return [row, col];
     }
   }
 
   return [-1, -1];
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    300
  )
);
