/**
 * @description Solution using hashset to find the zero sub array
 * @param {number[]} array
 * @returns {boolean}
 * @complexities Time => O(n) | Space => O(n)
 */
const zeroSumSubArray = (array) => {
  const hashSet = new Set();
  hashSet.add(0);
  let currentSum = 0;
  for (const value of array) {
    currentSum += value;
    if (hashSet.has(currentSum)) {
      return true;
    } else {
      hashSet.add(currentSum);
    }
  }
  return false;
};

console.log(zeroSumSubArray([4, -3, 2, 4, -1, -5, 7]));
