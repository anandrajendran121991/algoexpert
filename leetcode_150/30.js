/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (!s || words.length === 0) return [];
  const subString = [];
  const wordCount = new Map();
  for (const word of words) {
    if (wordCount.has(word)) wordCount.set(word, wordCount.get(word) + 1);
    else wordCount.set(word, 1);
  }

  let wordLength = words[0].length;
  let totalWordLength = words.length * wordLength;
  for (let i = 0; i < wordLength; i++) {
    let right = i;
    let left = i;
    let windowCount = new Map();
    let matches = 0;
    while (right + wordLength <= s.length) {
      // Add the word at the right pointer
      const word = s.substring(right, right + wordLength);
      right += wordLength;
      if (wordCount.has(word)) {
        if (windowCount.has(word)) {
          windowCount.set(word, windowCount.get(word) + 1);
        } else {
          windowCount.set(word, 1);
        }
        if (windowCount.get(word) === wordCount.get(word)) {
          matches++;
        }

        while (right - left > totalWordLength) {
          const leftWord = s.substring(left, left + wordLength);
          left += wordLength;
          if (wordCount.has(leftWord)) {
            if (windowCount.get(leftWord) === wordCount.get(leftWord)) {
              matches--;
            }
            windowCount.set(leftWord, windowCount.get(leftWord) - 1);
          }
        }

        if (matches === wordCount.size) subString.push(left);
      } else {
        windowCount.clear();
        matches = 0;
        left = right;
      }
    }
  }

  return subString;
};

console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]));
