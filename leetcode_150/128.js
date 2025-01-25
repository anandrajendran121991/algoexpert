/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let longest = 0;
  let currentLongest = 0;
  const set = new Set(nums);
  const visited = new Set();
  for (const num of set) {
    let plusOne = num + 1; // 101
    let minusOne = num - 1; // 99
    while (set.has(plusOne) && !visited.has(plusOne)) {
      visited.add(plusOne);
      plusOne++;
      currentLongest++;
    }

    while (set.has(minusOne) && !visited.has(minusOne)) {
      visited.add(minusOne);
      minusOne--;
      currentLongest++;
    }

    longest = Math.max(currentLongest + 1, longest);
    currentLongest = 0;
  }

  return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
