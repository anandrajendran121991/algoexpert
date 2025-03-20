/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const n = s1.length,
    m = s2.length;
  if (n > m) return false;

  let s1Map = new Map();
  let s2Map = new Map();

  // Initialize frequency map for s1
  for (let char of s1) {
    s1Map.set(char, (s1Map.get(char) || 0) + 1);
  }

  let left = 0;

  for (let right = 0; right < m; right++) {
    let rightChar = s2[right];
    s2Map.set(rightChar, (s2Map.get(rightChar) || 0) + 1);

    // Shrink the window when it exceeds s1.length
    if (right >= n) {
      let leftChar = s2[left];
      if (s2Map.has(leftChar)) {
        s2Map.set(leftChar, s2Map.get(leftChar) - 1);
      }
      left++;
    }

    // Check if frequency maps match
    if (compareFun(s1Map, s2Map)) return true;
  }

  return false;
};

function compareFun(s1Map, s2Map) {
  for (const [s1MapKey, s1MapFrequency] of s1Map) {
    if (!s2Map.has(s1MapKey)) {
      return false;
    } else {
      if (s2Map.get(s1MapKey) !== s1MapFrequency) {
        return false;
      }
    }
  }
  return true;
}

// Example test cases
console.log(checkInclusion("ab", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboooo")); // false
console.log(checkInclusion("abc", "cbaebabacd")); // true
