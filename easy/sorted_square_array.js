/**
 * @description Solution one where we find the square of a the values and push into an array and then sort in by asc
 * @param {number[]} array
 * @returns {number[]}
 * @complexities Time => O(n) | Space O(n)
 */

const sortedSquareArray = (array) => {
  const sortedSquareArray = [];
  for (const value of array) {
    sortedSquareArray.push(value * value);
  }
  return sortedSquareArray.sort((a, b) => a - b);
};

/**
 * @description Solution two using two pointers to push the squared numbers
 * @param {number[]} array
 * @returns {number[]}
 * @complexities Time => O(n) | Space O(1)
 */
const sortedSquareArrayOne = (array) => {
  const arrayLength = array.length;
  let leftPointer = 0;
  let rightPointer = arrayLength - 1;
  const sortedSquareArray = new Array(arrayLength).fill(0);
  let resultPosition = rightPointer;
  while (leftPointer <= rightPointer) {
    const smallerValue = array[leftPointer];
    const largerValue = array[rightPointer];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquareArray[resultPosition] = smallerValue * smallerValue;
      resultPosition--;
      leftPointer++;
    } else {
      sortedSquareArray[resultPosition] = largerValue * largerValue;
      resultPosition--;
      rightPointer--;
    }
  }

  return sortedSquareArray;
};

console.log(sortedSquareArray([1, 2, 3, 5, 6, 8, 9]));
console.log(sortedSquareArrayOne([1, 2, 3, 5, 6, 8, 9]));
