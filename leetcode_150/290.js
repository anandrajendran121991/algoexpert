const wordPattern = (pattern, s) => {
  s = s.split(" ");
  if (s.length !== pattern.length) {
    return false;
  }
  const hashTable = {};
  let i = 0;
  let j = pattern.length;
  while (i < j) {
    if (pattern[i] in hashTable) {
      if (hashTable[pattern[i]] !== s[i]) {
        return false;
      }
    } else {
      if (Object.values(hashTable).includes(s[i])) {
        return false;
      } else {
        hashTable[pattern[i]] = s[i];
      }
    }
    i++;
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
