/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const hashTable = {};

  for (const character of t) {
    if (character in hashTable) {
      hashTable[character] += 1;
    } else {
      hashTable[character] = 1;
    }
  }

  for (const character of t) {
    if (!(character in hashTable && hashTable[character] > 0)) {
      return false;
    } else {
      hashTable[character] = hashTable[character] - 1;
    }
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
