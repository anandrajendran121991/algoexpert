/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = "";
  let carry = 0;
  let pointerOne = a.length - 1;
  let pointerTwo = b.length - 1;

  while (pointerOne >= 0 || pointerTwo >= 0 || carry > 0) {
    const digitA = pointerOne >= 0 ? parseInt(a[pointerOne]) : 0;
    const digitB = pointerTwo >= 0 ? parseInt(b[pointerTwo]) : 0;
    const sum = digitA + digitB + carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
    pointerOne--;
    pointerTwo--;
  }

  return result;
};

console.log(addBinary("1010", "1011"));
