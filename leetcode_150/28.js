/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const needleLength = needle.length;
  const haystackLength = haystack.length;

  for (let i = 0; i < haystackLength - needleLength + 1; i++) {
    // Assume that the needle is found unless a mismatch is found
    let isMatch = true;

    for (let j = 0; j < needleLength; j++) {
      if (haystack[i + j] !== needle[j]) {
        // If characters do not match, set isMatch to false and break out of the inner loop
        isMatch = false;
        break;
      }
    }
    if (isMatch) {
      return i;
    }
  }

  return -1;
};

console.log(strStr("sadbutsad", "sad"));
