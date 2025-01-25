var findPeakElement = function (nums) {
  const length = nums.length;
  let peakElementIdx = 0;
  if (length === 1) return peakElementIdx;

  let previous = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < length; i++) {
    let current = nums[i];
    let next =
      nums[i + 1] === undefined ? Number.MIN_SAFE_INTEGER : nums[i + 1];

    if (current > previous && current > next) {
      peakElementIdx = i;
      return peakElementIdx;
    }
    previous = current;
  }

  return peakElementIdx;
};

var findPeakElementBinarySearch = function (nums) {
  nums = [Number.MIN_SAFE_INTEGER].concat(nums).concat(Number.MIN_SAFE_INTEGER);
  let low = 0;
  while (low < nums.length - 2) {
    let newHigh = low + 2;
    let mid = Math.floor((low + newHigh) / 2);
    if (nums[mid] > nums[low] && nums[mid] > nums[newHigh]) {
      return mid - 1;
    } else {
      low = mid;
    }
  }
  return 0;
};

console.log(findPeakElementBinarySearch([1, 2, 1, 3, 5, 6, 4]));
