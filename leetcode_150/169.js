var majorityElement = function (nums) {
  if (isMajority(nums)) {
    let max_index = 0;
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
      if (nums[max_index] === nums[i]) count++;
      else count--;

      if (count === 0) {
        max_index = i;
        count = 1;
      }
    }
    return nums[max_index];
  } else {
    return "not a valid input";
  }
};

const isMajority = (nums) => {
  const hashTable = {};

  for (const num of nums) {
    if (num in hashTable) {
      hashTable[num] += 1;
    } else {
      hashTable[num] = 1;
    }
  }

  let max = Number.MIN_SAFE_INTEGER;
  let res = null;
  for (const [num, count] of Object.entries(hashTable)) {
    if (count > max) {
      max = count;
      res = num;
    }
  }
  if (max > nums.length / 2) {
    return true;
  }

  return false;
};

console.log(majorityElement([3, 2, 3, 4, 3]));
