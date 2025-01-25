const removeDuplicates = (nums) => {
  let count = 1,
    j = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count += 1;
    } else {
      count = 1;
    }

    if (count <= 2) {
      nums[j] = nums[i];
      j += 1;
    }
  }

  return j;
};

console.log(removeDuplicates([0, 0, 0, 0, 1, 2, 2, 2, 3]));
// [0, 0, 1, 2, 2, 3]
