/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0];
  result.push(prev);
  for (const interval of intervals) {
    const [nextStart, nextEnd] = interval;
    if (nextStart <= prev[1]) {
      prev[1] = Math.max(prev[1], nextEnd);
    } else {
      result.push(interval);
      prev = interval;
    }
  }

  return result;
};

console.log(
  merge([
    [2, 3],
    [2, 2],
    [3, 3],
    [1, 3],
    [5, 7],
    [2, 2],
    [4, 6],
  ])
);
