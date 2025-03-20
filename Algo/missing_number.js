/**
 * @description Solution to find the missing number using a Set
 * @param {number[]} array
 * @returns {number[]}
 * @complexities Time => O(n) | Space => O(n)
 */
const missingNumber = (array) => {
  const missingNumber = [];
  const hashSet = new Set();
  for (const value of array) {
    hashSet.add(value);
  }

  for (let i = 1; i < array.length + 3; i++) {
    if (!hashSet.has(i)) {
      missingNumber.push(i);
    }
  }
  return missingNumber;
};

console.log(missingNumber([]));
