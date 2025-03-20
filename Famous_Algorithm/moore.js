function majorityElement(nums) {
  let count = 1;
  let major = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[major]) {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      count = 1;
      major = i;
    }
  }

  let freq = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[major]) freq++;
  }

  if (freq > Math.floor(nums.length / 2)) {
    return true;
  }
  return false;
}
