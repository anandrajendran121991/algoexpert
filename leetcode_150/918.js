/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let totalMax = nums[0];
  let currentMax = nums[0];
  let total = nums[0];

  let totalMin = nums[0];
  let currentMin = nums[0];
  const length = nums.length;
  for (let i = 1; i < length; i++) {
    let currentNum = nums[i];
    total += currentNum;
    currentMax = Math.max(currentNum + currentMax, currentNum);
    currentMin = Math.min(currentNum + currentMin, currentNum);
    totalMax = Math.max(currentMax, totalMax);
    totalMin = Math.min(currentMin, totalMin);
  }

  if (totalMax > 0) {
    return Math.max(totalMax, total - totalMin);
  } else {
    return totalMax;
  }
};

console.log(maxSubarraySumCircular([5, -3, 5]));
