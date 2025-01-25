/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0]);
  let min = 1;
  let [prevStart, prevEnd] = points[0];
  for (let i = 1; i < points.length; i++) {
    const [currentStart, currentEnd] = points[i];
    if (currentStart > prevEnd) {
      min++;
      prevStart = currentStart;
      prevEnd = currentEnd;
    } else {
      prevEnd = Math.min(prevEnd, currentEnd);
    }
  }

  return min;
};

console.log(
  findMinArrowShots([
    [3, 9],
    [7, 12],
    [3, 8],
    [6, 8],
    [9, 10],
    [2, 9],
    [0, 9],
    [3, 9],
    [0, 6],
    [2, 8],
  ])
);
