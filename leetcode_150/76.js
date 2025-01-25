/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length > s.length) return "";
  const hashMap = new Map();
  for (const tchar of t) {
    if (hashMap.has(tchar)) hashMap.set(tchar, hashMap.get(tchar) + 1);
    else hashMap.set(tchar, 1);
  }

  let minSubString = "";
  let required = hashMap.size;
  let leftPointer = 0;
  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    let currentChar = s[rightPointer];
    if (hashMap.has(currentChar)) {
      hashMap.set(currentChar, hashMap.get(currentChar) - 1);
      if (hashMap.get(currentChar) === 0) required--;
    }

    while (required === 0) {
      let currentSubStringLength = rightPointer - leftPointer + 1;
      if (
        minSubString.length === 0 ||
        currentSubStringLength < minSubString.length
      ) {
        minSubString = s.slice(leftPointer, rightPointer + 1);
      }

      const leftChar = s[leftPointer];
      if (hashMap.has(leftChar)) {
        hashMap.set(leftChar, hashMap.get(leftChar) + 1);
        if (hashMap.get(leftChar) > 0) required++;
      }
      leftPointer++;
    }
  }

  return minSubString;
};

console.log(minWindow("AADOBECODE", "ABC")); // Output: "BANC"
