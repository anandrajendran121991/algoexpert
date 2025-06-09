function vowels(string, k) {
  let vowelsRequired = 5;
  let constantsRequired = k;
  let left = 0;
  let count = 0;
  const hashMap = new Map([
    ["a", 0],
    ["e", 0],
    ["i", 0],
    ["o", 0],
    ["u", 0],
  ]);

  for (let right = 0; right < string.length; right++) {
    const rightChar = string[right];
    if (hashMap.has(rightChar)) {
      if (hashMap.get(rightChar) === 0) {
        hashMap.set(rightChar, 1);
        vowelsRequired--;
      } else {
        hashMap.set(rightChar, hashMap.get(rightChar) + 1);
      }
    } else {
      constantsRequired--;
    }

    while (vowelsRequired === 0 && constantsRequired === 0) {
      count++;
      count += getRemainingCount(right + 1);
      const leftChar = string[left];
      if (hashMap.has(leftChar)) {
        hashMap.set(leftChar, hashMap.get(leftChar) - 1);
        if (hashMap.get(leftChar) === 0) vowelsRequired++;
      } else {
        constantsRequired++;
      }
      left++;
    }
  }

  function getRemainingCount(i) {
    let count = 0;
    for (let right = i; right < string.length; right++) {
      if (!hashMap.has(string[right])) return count;
      else count++;
    }
    return count;
  }

  return count;
}

console.log(vowels("ieaouqqieaouqq", 1));
