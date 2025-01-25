/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const array = [];
  let i = 0;
  let currentSString = "";
  while (i < s.length) {
    while (s[i] !== " " && i < s.length) {
      currentSString += s[i];
      i++;
    }

    array.push(currentSString);
    currentSString = "";

    while (s[i] === " " && i < s.length) {
      i++;
    }
  }

  return array[array.length - 1].length;
};

console.log(lengthOfLastWord("A man, "));
