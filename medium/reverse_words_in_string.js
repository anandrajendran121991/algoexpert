/**
 * @description Solution to reverse the string of words
 * @param {string[]} string
 * @returns {string[]}
 * @complexities Time => O(n) | Space => O(n)
 */
const reverseWordsInString = (string) => {
  let i = 0;
  let j = string.length;
  let currentString = "";
  const array = [];
  while (i < j) {
    while (string[i] !== " " && i < j) {
      currentString += string[i];
      i++;
    }
    if (currentString != "") array.push(currentString);
    currentString = "";
    while (string[i] === " " && i < j) {
      currentString += " ";
      i++;
    }
    if (currentString != "") array.push(currentString);
    currentString = "";
  }

  const revereArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    revereArray.push(array[i]);
  }

  return revereArray.join("");
};

console.log(reverseWordsInString("Reverse      These Words"));
