/**
 * @description Solution to find the overlapping intervals
 * @param {number[][]} intervals
 * @returns {number[][]}
 * @complexities Time => O(nlogn) | Space => O(n)
 */
const mergeOverlappingIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  const mergedIntervals = [];
  let currentInterval = intervals[0]; // [1,2]
  mergedIntervals.push(intervals[0]);
  for (const interval of intervals) {
    const [currentStart, currentEnd] = currentInterval;
    const [nextStart, nextEnd] = interval;
    if (currentEnd >= nextStart) {
      currentInterval[1] = Math.max(currentEnd, nextEnd);
    } else {
      currentInterval = interval;
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
};

console.log(
  mergeOverlappingIntervals([
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10],
  ])
);
