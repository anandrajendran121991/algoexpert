/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let currentInterval = intervals[0];
  const mergedInterval = [];
  mergedInterval.push(currentInterval);
  for (const interval of intervals) {
    const [nextStart, nextEnd] = interval;
    const [_, currentEnd] = currentInterval;
    if (nextStart <= currentEnd) {
      currentInterval[1] = Math.max(currentEnd, nextEnd);
    } else {
      currentInterval = interval;
      mergedInterval.push(currentInterval);
    }
  }

  return mergedInterval;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);


