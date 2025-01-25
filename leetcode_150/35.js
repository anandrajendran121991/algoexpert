var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    let midValue = nums[mid];
    if (midValue === target) {
      return mid;
    } else if (midValue > target) {
      high = mid - 1;
    } else if (midValue < target) {
      low = mid + 1;
    }
  }
  return low + 1;
};

console.log(searchInsert([1, 3, 5, 6], 7));
