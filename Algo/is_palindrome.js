/**
 * @description Solution using two pointers
 * @param {string[]} string
 * @returns {boolean}
 * @complexities Time => O(n) | Space => O(1)
 */
const isPalindrome = (string) => {
  let i = 0;
  let j = string.length - 1;
  let isPalindromeString = true;
  while (i < j) {
    if (string[i] === string[j]) {
      i++;
      j--;
    } else {
      isPalindromeString = false;
      return isPalindromeString;
    }
  }
  return isPalindromeString;
};

console.log(isPalindrome("abcdcba"));
