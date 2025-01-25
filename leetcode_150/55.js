/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let goal = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    let next = i + nums[i];
    if (next >= goal) {
      goal = i;
    }
  }

  if (goal === 0) return true;
  else return false;
};

console.log(canJump([2, 0, 0]));
