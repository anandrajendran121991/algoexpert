import { MinHeap } from "../medium/minHeap.js";
function sortKSortedArray(array, k) {
  // Write your code here.
  const result = [];
  let insertPostion = 0;
  const minHeap = new MinHeap(array.slice(0, k + 1));

  for (let j = k + 1; j < array.length; j++) {
    const min = minHeap.remove();
    result[insertPostion] = min;
    const current = array[j];
    minHeap.insert(current);
    insertPostion++;
  }

  while (minHeap.getSize() > 0) {
    result[insertPostion] = minHeap.remove();
    insertPostion++;
  }

  return result;
}

console.log(sortKSortedArray([3, 2, 1, 5, 4, 7, 6, 5], 3));
