/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagrams = {};
  for (word of strs) {
    const sortedWord = word.split("").sort().join("");

    if (sortedWord in anagrams) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }

  return Object.values(anagrams);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
