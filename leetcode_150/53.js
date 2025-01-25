/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let totalSum = nums[0];
  let currentTotal = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let currentNum = nums[i];
    currentTotal = Math.max(currentNum + currentTotal, currentNum);
    totalSum = Math.max(currentTotal, totalSum);
  }

  return totalSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
