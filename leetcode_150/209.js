var minSubArrayLen = function (nums, target) {
  let left = 0;
  let total = 0;
  let minSize = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    while (total >= target) {
      minSize = Math.min(minSize, i - left + 1);
      total = total - nums[left];
      left++;
    }
  }

  return minSize === Number.MAX_SAFE_INTEGER ? 0 : minSize;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
