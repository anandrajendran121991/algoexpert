/**
 * @description Solution to check if the document can be generated using hashTable
 * @param {string} characters
 * @param {string} document
 * @returns {boolean}
 * @complexities Time => O(n+m) | Space = O(c) - where n is the length of characters and m is the length of document
 * and c is the number of unique characters string
 */
const generateDocument = (characters, document) => {
  const hashTable = {};
  for (const character of characters) {
    if (character in hashTable) {
      hashTable[character] += 1;
    } else {
      hashTable[character] = 1;
    }
  }

  for (const character of document) {
    if (character in hashTable && hashTable[character] > 0) {
      hashTable[character] -= 1;
    } else {
      return false;
    }
  }
  return true;
};

console.log(
  generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!")
);
