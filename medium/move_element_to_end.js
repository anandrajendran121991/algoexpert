/**
 * @description Solution to move the given number to end of the array in place
 * @param {number[]} array
 * @param {number} toMove
 * @returns
 * @complexities Time => O(n) | Space => O(1)
 */
const moveElementToEnd = (array, toMove) => {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    while (i < j && array[j] === toMove) {
      j--;
    }
    if (array[i] === toMove) {
      swap(array, i, j);
    }
    i++;
  }

  return array;
};

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
