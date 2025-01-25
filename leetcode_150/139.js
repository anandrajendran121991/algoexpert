/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const hashMap = new Set(wordDict);
  const rec = (startIdx, memo = []) => {
    if (startIdx in memo) return memo[startIdx];
    if (startIdx === s.length) return true;

    for (let endIdx = startIdx + 1; endIdx <= s.length; endIdx++) {
      const string = s.slice(startIdx, endIdx);

      if (hashMap.has(string) && rec(endIdx, memo)) {
        memo[startIdx] = true;
        return true;
      }
    }

    memo[startIdx] = false;
    return false;
  };

  return rec(0);
};

console.log(
  wordBreak(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
    [
      "a",
      "aa",
      "aaa",
      "aaaa",
      "aaaaa",
      "aaaaaa",
      "aaaaaaa",
      "aaaaaaaa",
      "aaaaaaaaa",
      "aaaaaaaaaa",
    ]
  )
);
