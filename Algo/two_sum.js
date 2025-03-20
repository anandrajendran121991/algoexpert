/**
 * @description Solution one using a naive solution which iterates through all the values using 2 for loops
 * @param {nums[]} nums
 * @param {number} target
 * @return {number[]}
 * @complexities Time => O(n) | Space => O(1)
 */
const twoSumTwoNaive = (array, target) => {
  for (let idxOne = 0; idxOne < array.length; idxOne++) {
    for (let idxTwo = idxOne + 1; idxTwo < array.length; idxTwo++) {
      let firstValue = array[idxOne];
      let secondValue = array[idxTwo];
      let potentialTarget = firstValue + secondValue;
      if (potentialTarget === target) {
        return [firstValue, secondValue];
      }
    }
  }
  return [];
};

/**
 * @description Solution two using a hashSet to find the difference which does a look up using O(1)s
 * @param {num[]} array
 * @param {number} target
 * @returns {number[]}
 * @complexities Time => O(n) | Space => O(n)
 */
const twoSumHashSet = (array, target) => {
  const hashSet = new Set();
  for (const value of array) {
    let diff = target - value;
    if (hashSet.has(diff)) {
      return [value, diff];
    } else {
      hashSet.add(value);
    }
  }

  return [];
};

/**
 * @description Solution three which uses two pointers to find the target using sorted array
 * @param {number[]} array
 * @param {number} target
 * @returns {number[]}
 * @complexities Time => O(n) | Space => O(1)
 */
const twoSumTwoPointer = (array, target) => {
  const sortedArray = array.sort((a, b) => a - b);
  let leftPointerIndex = 0;
  let rightPointerIndex = sortedArray.length;
  while (leftPointerIndex < rightPointerIndex) {
    let diff = array[leftPointerIndex] + array[rightPointerIndex];
    if (diff === target) {
      return [array[leftPointerIndex], array[rightPointerIndex]];
    } else if (diff < target) {
      leftPointerIndex++;
    } else {
      rightPointerIndex--;
    }
  }
  return [];
};

console.log(twoSumHashSet([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.log(twoSumTwoPointer([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.log(twoSumTwoNaive([3, 5, -4, 8, 11, 1, -1, 6], 10));
