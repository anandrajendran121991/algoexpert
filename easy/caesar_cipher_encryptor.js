/**
 * @description Solution to find the encrypted string
 * @param {string} string
 * @param {number} key
 * @returns {string}
 * @complexities Time => O(n) | Space => O(1)
 */
const caesarCipherEncryptor = (string, key) => {
  let encodedString = "";
  for (const lowerAlphabet of string) {
    // Convert character to ASCII code
    let ascii = lowerAlphabet.charCodeAt(0) + key;
    let shiftedString = String.fromCharCode(97 + ((ascii - 97) % 26));
    encodedString += shiftedString;
  }
  return encodedString;
};

console.log(caesarCipherEncryptor("xyz", 2));
