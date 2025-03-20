function minNumberOfJumps(array) {
  // Write your code here.
  let j = 0;
  let i = 0;
  let jump = 0;
  const len = array.length;
  while (j < len - 1) {
    let max = -1;
    while (i <= j) {
      max = Math.max(max, i + array[i]);
      i++;
    }

    i = j + 1;
    j = max;
    jump++;
  }

  return jump;
}

console.log(minNumberOfJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]));
