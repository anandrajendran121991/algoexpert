/**
 * @description Solution using hashSet
 * @param {words[]} words
 * @returns {words[]}
 * @complexities Time => O(n * m) | Space where n is the number of words and m is the length of the longest word
 */
const semordnilap = (words) => {
  const semo = [];
  const hashSet = {};
  for (const word of words) {
    const reversedWord = word.split("").reverse().join("");
    if (word in hashSet) {
      semo.push([word, reversedWord]);
    } else {
      hashSet[reversedWord] = word;
    }
  }

  return semo;
};

console.log(semordnilap(["diaper", "abc", "test", "cba", "repaid"]));
