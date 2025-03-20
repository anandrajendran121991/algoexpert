function phoneNumberMnemonics(digits) {
  const results = [];
  const hashTable = {
    0: "0",
    1: "1",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const combinations = (idx, currentString) => {
    if (currentString.length === digits.length) {
      return results.push(currentString);
    }

    for (const digit of hashTable[digits[idx]]) {
      combinations(idx + 1, currentString + digit);
    }
  };
  if (digits) {
    combinations(0, "");
  }
  return results;
}

console.log(phoneNumberMnemonics("1905"));
