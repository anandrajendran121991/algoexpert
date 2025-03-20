/**
 * @description Solution using hashTable
 * @param {string} string
 * @returns {number}
 * @complexities Time => O(n) | Space O(n)
 */
const firstNonRepeatingCharacter = (string) => {
  const hashTable = {};
  for (const letter of string) {
    if (letter in hashTable) {
      hashTable[letter] += 1;
    } else {
      hashTable[letter] = 1;
    }
  }

  for (let i = 0; i < string.length; i++) {
    if (hashTable[string[i]] === 1) return i;
  }
  return -1;
};

console.log(firstNonRepeatingCharacter("abcdcaf"));
