/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n, hashTable = []) {
  const stringRepresentation = n.toString();
  if (n === 1) {
    return true;
  }

  let j = stringRepresentation.length;
  let i = 0;
  let squaredNumber = 0;
  while (i < j) {
    squaredNumber += stringRepresentation[i] * stringRepresentation[i];
    i++;
  }

  if (!(squaredNumber in hashTable)) {
    hashTable[squaredNumber] = true;
  } else {
    return false;
  }
  return isHappy(squaredNumber, hashTable);
};

console.log(isHappy(2));
