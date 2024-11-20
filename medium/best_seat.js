/**
 * @description Solution using pointers
 * @param {number[]} seats
 * @returns {number}
 * @complexities Time => O(n) | Space => O(1)
 */
const bestSeat = (seats) => {
  let bestSeat = -1;
  let maxAvailableSequence = 0;
  let i = 0;
  while (i < seats.length) {
    if (seats[i] === 1) {
      i++;
      continue;
    }
    let rightIdx = i + 1;
    while (rightIdx < seats.length && seats[rightIdx] === 0) {
      rightIdx++;
    }

    let currentAvailableSequence = rightIdx - i;
    if (currentAvailableSequence > maxAvailableSequence) {
      maxAvailableSequence = currentAvailableSequence;
      bestSeat = Math.floor((i + rightIdx - 1) / 2);
    }

    i = rightIdx;
  }
  return bestSeat;
};

console.log(bestSeat([1, 0, 1, 0, 0, 0, 1]));
