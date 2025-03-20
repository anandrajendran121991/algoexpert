/**
 * @description Solution to 
 * @param {number[]} arrayOne 
 * @param {number[]} arrayTwo 
 * @returns {number[]}
 * @complexities Time => O(nlog(n) + mlog(m)) | Space => O(1)
 */
const smallestDifference = (arrayOne, arrayTwo) => {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let smallestPair = [];
  let smallest = Number.MAX_SAFE_INTEGER;
  let idxOne = 0;
  let idxTwo = 0;
  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNum = arrayOne[idxOne];
    let secondNum = arrayTwo[idxTwo];
    if (firstNum === secondNum) {
      smallestPair = [firstNum, secondNum];
      return smallestPair;
    } else if (firstNum < secondNum) {
      if (Math.abs(firstNum - secondNum) < smallest) {
        smallest = Math.abs(firstNum - secondNum);
        smallestPair = [firstNum, secondNum];
      }
      idxOne++;
    } else if (firstNum > secondNum) {
      if (Math.abs(firstNum - secondNum) < smallest) {
        smallest = Math.abs(firstNum - secondNum);
        smallestPair = [firstNum, secondNum];
      }
      idxTwo++;
    }
  }

  return smallestPair;
};

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
