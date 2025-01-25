/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hashMap) {
      hashMap[nums[i]].push(i);
    } else {
      hashMap[nums[i]] = [i];
    }
  }

  for (const value of Object.values(hashMap)) {
    if (value.length > 1) {
      for (let i = 1; i < value.length; i++) {
        if (Math.abs(value[i - 1] - value[i]) <= k) {
          return true;
        }
      }
    }
  }

  return false;
};

//console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));

const containsNearbyDuplicate1 = (nums, k) => {
  let i = 0;
  let j = i + 1;
  while (j < nums.length) {
    while (j - i <= k && j < nums.length) {
      if (nums[j] === nums[i]) {
        return true;
      }
      j++;
    }
    i++;
    j = i + 1;
  }

  return false;
};

/**
 *
 * @param {*} nums
 * @param {*} k
 * @complexities Time => O(n) | Space => O(k)
 */
function containsNearbyDuplicate2(nums, k) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hashMap) {
      if (i - hashMap[nums[i]] <= k) {
        return true;
      } else {
        hashMap[nums[i]] = i;
      }
    } else {
      hashMap[nums[i]] = i;
    }
  }
  return false;
}

console.log(containsNearbyDuplicate2([2, 2], 3));
console.log(containsNearbyDuplicate2([1, 2, 3, 4, 1, 1], 3));
console.log(containsNearbyDuplicate2([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate2([1, 2, 3, 1], 2));
