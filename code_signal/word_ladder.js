/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;

  wordList.push(beginWord);
  const hashMap = new Map();
  for (const word of wordList) {
    for (let i = 0; i < word.length; i++) {
      let pattern = word.slice(0, i) + "*" + word.slice(i + 1);
      if (hashMap.has(pattern)) hashMap.get(pattern).push(word);
      else hashMap.set(pattern, [word]);
    }
  }

  const queue = [beginWord];
  const visited = new Set();
  visited.add(beginWord);
  let sequenceLength = 0;
  while (queue.length > 0) {
    const size = queue.length;
    for (let x = 0; x < size; x++) {
      let word = queue.shift();
      if (word === endWord) return sequenceLength + 1;
      for (let i = 0; i < word.length; i++) {
        let pattern = word.slice(0, i) + "*" + word.slice(i + 1, word.length);
        for (const lei of hashMap.get(pattern)) {
          if (visited.has(lei)) continue;
          visited.add(lei);
          queue.push(lei);
        }
      }
    }

    sequenceLength++;
  }

  return sequenceLength;
};

console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
