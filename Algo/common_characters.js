/**
 * @description Solution to find the common character using the hashTable
 * @param {strings[]} strings
 * @returns {string[]}
 * @complexities Time => O(n * m) | Space => O(n) where n is the length of the string and m is the length of the strings
 */
const commonCharacters = (strings) => {
  const unique = [];
  for (const string of strings) {
    const hashSet = new Set();
    for (const letter of string) {
      hashSet.add(letter);
    }
    unique.push(hashSet);
  }

  const hashTable = {};
  for (const string of unique) {
    for (const letter of string) {
      if (letter in hashTable) {
        hashTable[letter] += 1;
      } else {
        hashTable[letter] = 1;
      }
    }
  }

  const commonCharacter = [];

  for (const [letter, count] of Object.entries(hashTable)) {
    if (count === strings.length) {
      commonCharacter.push(letter);
    }
  }
  return commonCharacter;
};

console.log(commonCharacters(["abcc", "bcd", "cbad"]));
