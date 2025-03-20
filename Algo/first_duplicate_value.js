/**
 * @description olution to find the first duplicate using Set()
 * @param {number[]} array
 * @returns {number}
 * @complexities Time => O(n) | Space => O(n)
 */
const firstDuplicateValue = (array) => {
  const hashSet = new Set();
  for (const value of array) {
    if (hashSet.has(value)) {
      return value;
    }
    hashSet.add(value);
  }
  return -1;
};

console.log(firstDuplicateValue([2, 1, 5, 11, 3, 30, 4]));
