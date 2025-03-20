function threeNumberSort(array, order) {
  // Write your code here.
  let insertPosition = 0;
  let i = 0;
  while (i < order.length) {
    for (let j = 0; j < array.length; j++) {
      if (order[i] === array[j]) {
        swap(insertPosition, j, array);
        insertPosition++;
      }
    }
    i++;
  }
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(threeNumberSort([1, 0, 0, -1, -1, 0, 1, 1], [0, 1, -1]));
