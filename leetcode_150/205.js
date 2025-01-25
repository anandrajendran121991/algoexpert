const isIsomorphic = (s, t) => {
  const hashTable = {};
  let i = 0;
  const length = s.length;
  while (i < length) {
    let characterInS = s[i];
    let characterInT = t[i];
    if (characterInS in hashTable) {
      if (hashTable[characterInS] !== characterInT) {
        return false;
      }
    } else {
      if (Object.values(hashTable).includes(characterInT)) {
        return false;
      }
      hashTable[characterInS] = characterInT;
    }
    i++;
  }

  return true;
};

console.log(isIsomorphic("badc", "baba"));
