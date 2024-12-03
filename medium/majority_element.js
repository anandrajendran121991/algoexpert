/**
 * @description Solution to find the majority number using hashTable
 * @param {number[]} array
 * @returns {number}
 * @complexities Time O(n) | Space => O(n)
 */
const majorityNumber = (array) => {
  const hashSet = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i] in hashSet) {
      hashSet[array[i]] += 1;
    } else {
      hashSet[array[i]] = 1;
    }
  }

  let max = Number.MIN_SAFE_INTEGER;
  let maxNumber = null;
  for (const [key, value] of Object.entries(hashSet)) {
    if (value > max) {
      max = value;
      maxNumber = +key;
    }
  }
  return maxNumber;
};

const majorityNumberBoydMoores = (nums) => {
  let majorityIdx = 0;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[majorityIdx]) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      count = 1
      majorityIdx = i;
    }
  }

  return nums[majorityIdx];
};

console.log(majorityNumberBoydMoores([1, 2, 3, 2, 2, 1, 2]));
