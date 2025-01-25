/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let positionToInsert = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[positionToInsert] = nums[i];
      positionToInsert++;
    }
  }
  return positionToInsert;
};

console.log(removeDuplicates([0, 0, 0, 0, 1, 2, 2, 2, 3]));
