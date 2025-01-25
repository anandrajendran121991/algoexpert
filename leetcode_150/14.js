/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const count = strs.length;
  let longest = "";
  let minWordCount = Number.MAX_SAFE_INTEGER;

  for (const str of strs) {
    if (str.length < minWordCount) {
      minWordCount = str.length;
    }
  }

  let i = 0;
  let loop = 0;
  while (i < minWordCount) {
    let letter = strs[0][i];
    let j = 0;
    while (j < count) {
      if (letter === strs[j][i]) {
        loop++;
      }
      j++;
    }

    if (loop === count) {
      longest += letter;
    } else {
      return longest;
    }
    loop = 0;
    i++;
  }

  return longest;
};

console.log(longestCommonPrefix(["dog", "racecar", "car"]));
