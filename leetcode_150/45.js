/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let jump = 0;
  let leftPointer = 0;
  let rightPointer = 0;
  while (rightPointer < nums.length - 1) {
    let max = 0;
    for (let i = leftPointer; i <= rightPointer; i++) {
      max = Math.max(max, nums[i] + i);
    }

    leftPointer = rightPointer + 1;
    rightPointer = max;
    jump++;
  }

  return jump;
};

console.log(jump([2, 3, 1, 1, 4]));
