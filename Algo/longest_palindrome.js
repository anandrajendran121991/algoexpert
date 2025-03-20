/**
 *
 * @param {string} string
 * @returns {string}
 * @complexities Time = > O(n^2) | Space => O(1)
 */
const longestPalindrome = (string) => {
  let longest = [0, 1];
  for (let i = 1; i < string.length; i++) {
    const even = getLongestPalindrome(i - 1, i, string);
    const odd = getLongestPalindrome(i - 1, i + 1, string);
    if (even[1] - even[0] > odd[1] - odd[0]) {
      if (longest[1] - longest[0] < even[1] - even[0]) {
        longest[0] = even[0];
        longest[1] = even[1];
      }
    } else {
      if (longest[1] - longest[0] < odd[1] - odd[0]) {
        longest[0] = odd[0];
        longest[1] = odd[1];
      }
    }
  }
  return string.slice(longest[0], longest[1]);
};

const getLongestPalindrome = (left, right, string) => {
  while (left >= 0 && right < string.length) {
    if (string[left] !== string[right]) break;
    left--;
    right++;
  }
  return [left + 1, right];
};

console.log(longestPalindrome("baban"));
