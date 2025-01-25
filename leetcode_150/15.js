const threeSum = (nums) => {
  const threeSumResult = [];
  nums = nums.sort((a, b) => a - b);

  const hashTable = [];
  for (let i = 0; i < nums.length; i++) {
    let leftPointer = i + 1;
    let rightPointer = nums.length - 1;
    while (leftPointer < rightPointer) {
      if (nums[i] + nums[leftPointer] + nums[rightPointer] === 0) {
        let key = nums[i] + "$" + nums[leftPointer] + "$" + nums[rightPointer];
        if (!(key in hashTable)) {
          threeSumResult.push([nums[i], nums[leftPointer], nums[rightPointer]]);
          hashTable[key] = true;
        }
        leftPointer++;
        rightPointer--;
      } else if (nums[i] + nums[leftPointer] + nums[rightPointer] > 0) {
        rightPointer--;
      } else if (nums[i] + nums[leftPointer] + nums[rightPointer] < 0) {
        leftPointer++;
      }
    }
  }

  return threeSumResult;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
