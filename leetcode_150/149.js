/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  let res = 1;
  for (let i = 0; i < points.length; i++) {
    let p1 = points[i];
    const count = new Map();
    for (let j = i + 1; j < points.length; j++) {
      let p2 = points[j];
      let slope;
      if (p1[0] === p2[0]) {
        slope = -Infinity;
      } else {
        slope = (p2[1] - p1[1]) / (p2[0] - p1[0]);
      }
      if (count.has(slope)) {
        count.set(slope, count.get(slope) + 1);
      } else {
        count.set(slope, 1);
      }
      res = Math.max(res, count.get(slope) + 1);
    }
  }

  return res;
};

console.log(
  maxPoints([
    [1, 1],
    [2, 2],
    [3, 3],
  ])
);
