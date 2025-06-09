/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 0) return "";
  let longest = [0, 1];
  for (let i = 1; i < s.length; i++) {
    const even = getPalindromicSubstring(s, i - 1, i);
    const odd = getPalindromicSubstring(s, i - 1, i + 1);
    let currentLongest = even;
    if (currentLongest[1] - currentLongest[0] < odd[1] - odd[0]) {
      currentLongest = odd;
    }

    if (longest[1] - longest[0] < currentLongest[1] - currentLongest[0]) {
      longest = currentLongest;
    }
  }

  return s.slice(longest[0], longest[1]);
};

function getPalindromicSubstring(string, leftIdx, rightIdx) {
  while (
    leftIdx >= 0 &&
    rightIdx < string.length &&
    string[leftIdx] === string[rightIdx]
  ) {
    leftIdx--;
    rightIdx++;
  }

  return [leftIdx + 1, rightIdx];
}
