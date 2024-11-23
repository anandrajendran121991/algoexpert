/**
 *
 * @param {string} string
 * @returns {string}
 * @complexities Time = > O(n^2) | Space => O(1)
 */
const longestPalindrome = (string) => {
  let longestPalindromeString = "";
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    // odd length palindrome
    let left = i;
    let right = i;
    while (
      left >= 0 &&
      right < string.length &&
      string[left] === string[right]
    ) {
      if (right - left + 1 > count) {
        count = right - left + 1;
        longestPalindromeString = string.substring(left, right + 1);
      }
      left--;
      right++;
    }

    // even length palindrome
    left = i;
    right = i + 1;
    while (
      left >= 0 &&
      right < string.length &&
      string[left] === string[right]
    ) {
      if (right - left + 1 > count) {
        count = right - left + 1;
        longestPalindromeString = string.substring(left, right + 1);
      }
      left--;
      right++;
    }
  }

  return longestPalindromeString;
};

console.log(longestPalindrome("baban"));
