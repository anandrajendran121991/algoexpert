var twoSum = function (nums, target) {
  const hashTable = [];
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in hashTable) {
      return [i, hashTable[diff]];
    } else {
      hashTable[nums[i]] = i;
    }
  }
};

module.exports = twoSum;
