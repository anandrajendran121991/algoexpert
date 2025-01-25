const { run } = require("node:test");

function runLengthEncoding(string) {
  // Write your code here.
  let encodedString = "";
  let count = 1;
  let i = 1;
  while (i < string.length) {
    while (string[i - 1] === string[i] && i < string.length) {
      count++;
      i++;
    }

    while (count > 9) {
      encodedString += 9 + string[i - 1];
      count -= 9;
    }

    encodedString += count + string[i - 1];
    count = 1;
    i++;
  }

  if (string[string.length - 1] !== string[string.length - 2]) {
    encodedString += 1 + string[string.length - 1];
  }

  return encodedString;
}
console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDDDDDDDDDDD"));
