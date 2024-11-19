/**
 * @description Solution to find the longest peak
 * @param {number[]} array
 * @returns {number}
 * @complexities Time => O(n) | Space O(1)
 */
const longestPeak = (array) => {
  let longestPeakLength = 0;
  let i = 1;
  // Since we will encounter multiple peaks within the array we need to
  //compute the longest peak by iterating the whole array and return the max
  while (i < array.length - 1) {
    const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
    if (!isPeak) {
      i++;
      continue;
    }

    let leftPointer = i - 2;
    let rightPointer = i + 2;
    while (leftPointer >= 0 && array[leftPointer + 1] > array[leftPointer]) {
      leftPointer--;
    }

    while (
      rightPointer < array.length &&
      array[rightPointer] < array[rightPointer - 1]
    ) {
      rightPointer++;
    }

    let currentLongestPeak = rightPointer - leftPointer - 1;
    longestPeakLength = Math.max(currentLongestPeak, longestPeakLength);
    i = rightPointer;
  }

  return longestPeakLength;
};

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));
