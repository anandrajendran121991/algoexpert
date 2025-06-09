function groupAnagrams(words) {
  const hashMap = new Map();
  for (const word of words) {
    const sortedWord = word.split("").sort().join("");
    if (hashMap.has(sortedWord)) {
      hashMap.get(sortedWord).push(word);
    } else {
      hashMap.set(sortedWord, [word]);
    }
  }

  return Array.from(hashMap.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
