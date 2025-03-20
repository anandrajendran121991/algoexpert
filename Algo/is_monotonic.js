/**
 * @description Solution to find if the array is monotonic or not
 * @param {number[]} array
 * @returns {boolean}
 * @complexities Time => O(n) | Space => O(1)
 */
const isMonotonic = (array) => {
  let isIncreasingMono = true;
  let isDecreasingMono = true;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + 1]) {
      isDecreasingMono = false;
    }

    if (array[i] > array[i + 1]) {
      isIncreasingMono = false;
    }
  }

  return isIncreasingMono || isDecreasingMono;
};

console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]));
