/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;

  const hashTable = new Map();
  wordList.push(beginWord);
  for (const word of wordList) {
    for (let i = 0; i < word.length; i++) {
      let pattern = word.slice(0, i) + "*" + word.slice(i + 1, word.length);
      if (hashTable.has(pattern)) {
        hashTable.set(pattern, [...hashTable.get(pattern)].concat(word));
      } else {
        hashTable.set(pattern, [word]);
      }
    }
  }

  const queue = [];
  const visited = new Set();
  queue.push(beginWord);
  visited.add(beginWord);
  let shortestSequence = 0;
  while (queue.length > 0) {
    let queueSize = queue.length;
    for (let x = 0; x < queueSize; x++) {
      let word = queue.shift();
      if (word === endWord) return shortestSequence + 1;

      for (let i = 0; i < word.length; i++) {
        let pattern = word.slice(0, i) + "*" + word.slice(i + 1, word.length);
        for (const lei of hashTable.get(pattern)) {
          if (visited.has(lei)) continue;
          queue.push(lei);
          visited.add(lei);
        }
      }
    }

    shortestSequence++;
  }

  return shortestSequence;
};

console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);

// hot : ["*ot", "h*t", "ho*"]
// dot : ["*ot", "d*t", "do*"]
// dog : [*og", "d*g", "do*"]
// lot : ["*ot", "l*t", "lo*"] .
// log : ["*og", "l*g", "lo*"]
// cog : ["*og", "c*g", "co*"]

// hit -> hot -> dot -> dog -> log -> cog
