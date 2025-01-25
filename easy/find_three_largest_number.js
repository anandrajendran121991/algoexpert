function findThreeLargestNumbers(array) {
  // Write your code here.
  const largestThree = [-Infinity, -Infinity, -Infinity];

  for (const val of array) {
    if (val > largestThree[2]) {
      swap(largestThree, 2, val);
    } else if (val > largestThree[1]) {
      swap(largestThree, 1, val);
    } else if (val > largestThree[0]) {
      swap(largestThree, 0, val);
    }
  }

  return largestThree;
}

const swap = (largestThree, index, val) => {
  for (let i = 0; i < index; i++) {
    largestThree[i] = largestThree[i + 1];
  }
  largestThree[index] = val;
};

console.log(findThreeLargestNumbers([55, 7, 8, 3, 43, 11]));
