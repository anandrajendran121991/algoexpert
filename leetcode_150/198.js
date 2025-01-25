/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let rob1 = 0;
  let rob2 = 0;

  for (let i = 0; i < nums.length; i++) {
    const temp = Math.max(nums[i] + rob1, rob2);
    rob1 = rob2;
    rob2 = temp;
  }

  return rob2;
};

console.log(rob([1, 2, 3, 1]));
