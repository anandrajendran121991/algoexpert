/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const hashMap = new Map();
  let total = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    while (hashMap.has(s[right])) {
      hashMap.delete(s[left]);
      left += 1;
    }
    hashMap.set(s[right], true);
    total = Math.max(total, right - left + 1);
  }

  return total;
};
console.log(lengthOfLongestSubstring("abcabcabcbb"));

3
