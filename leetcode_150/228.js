/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let startPointer = 0;
  const output = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] !== 1) {
      let outputString = nums[startPointer];
      if (nums[startPointer] !== nums[i - 1]) {
        outputString = nums[startPointer] + "->" + nums[i - 1];
      }

      output.push("" + outputString);
      startPointer = i;
    }
  }

  if (nums[startPointer] !== nums[nums.length - 1]) {
    output.push("" + nums[startPointer] + "->" + nums[nums.length - 1]);
  } else {
    output.push("" + nums[startPointer]);
  }

  return output;
};

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
