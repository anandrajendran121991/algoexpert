/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {
  const rec = (string) => {
    if (string.length >= k) {
      return string;
    }

    let currentString = "";
    for (const letter of string) {
      let charCode = letter.charCodeAt(0);
      if (charCode === 122) {
        // if the current letter is 'z' we
        charCode = 97;
      } else {
        charCode++;
      }

      currentString += String.fromCharCode(charCode);
    }

    return rec(string + currentString);
  };

  let result = rec("a");
  return result[k - 1];
};

console.log(kthCharacter(10));
