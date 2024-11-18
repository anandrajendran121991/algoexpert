/**
 * @description Solution using two pointers to find the triplets which sums to the target using 3 nums
 * @param {number[]} array
 * @param {number} target
 * @returns {matrix[[]]}
 * @complexities Time => O(n^2) | Space => O(n)
 */
const threeSum = (array, target) => {
  const sortedArray = array.sort((a, b) => a - b);
  const triplets = [];
  for (let idx = 0; idx < array.length - 2; idx++) {
    let leftPointer = idx + 1;
    let rightPointer = array.length - 1;
    while (leftPointer < rightPointer) {
      const sum =
        sortedArray[idx] + sortedArray[leftPointer] + sortedArray[rightPointer];
      if (sum === target) {
        triplets.push([
          sortedArray[idx],
          sortedArray[leftPointer],
          sortedArray[rightPointer],
        ]);
        leftPointer++;
        rightPointer--;
      } else if (sum > target) {
        rightPointer--;
      } else {
        leftPointer++;
      }
    }
  }

  return triplets;
};

console.log(threeSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
