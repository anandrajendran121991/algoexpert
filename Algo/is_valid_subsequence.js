/**
 * @description Solution one which uses two pointers to iterate and to validate the occurence of sequence
 * @param {number[]} array
 * @param {number[]} sequence
 * @returns {boolean}
 * @complexities Time => O(n) | Space => O(1)
 */
const isValidSubsequence = (array, sequence) => {
  if (sequence.length > array.length) {
    return false;
  }

  let arrayPointer = 0;
  let sequencePointer = 0;

  while (arrayPointer < array.length && sequencePointer < sequence.length) {
    if (array[arrayPointer] === sequence[sequencePointer]) {
      arrayPointer++;
      sequencePointer++;
    } else {
      arrayPointer++;
    }
  }

  return sequencePointer === sequence.length;
};

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
