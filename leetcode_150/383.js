/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const hashTable = {};
  for (const letter of magazine) {
    if (letter in hashTable) {
      hashTable[letter] += 1;
    } else {
      hashTable[letter] = 1;
    }
  }

  let i = 0;
  while (i < ransomNote.length) {
    if (ransomNote[i] in hashTable && hashTable[ransomNote[i]] > 0) {
      hashTable[ransomNote[i]] = hashTable[ransomNote[i]] - 1;
    } else {
      return false;
    }
    i++;
  }

  return true;
};

console.log(canConstruct("aa", "aab"));
