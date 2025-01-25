/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const minHeap = new MinHeap([]);
  const result = [];
  for (let i = 0; i < Math.min(k, nums1.length); i++) {
    minHeap.insert(nums1[i] + nums2[0], i, 0);
  }

  while (k > 0 && !minHeap.isEmpty()) {
    const [sum, i, j] = minHeap.remove();
    result.push([nums1[i], nums2[j]]);
    k--;

    // Add the next pair in the same row
    if (j + 1 < nums2.length) {
      minHeap.insert(nums1[i] + nums2[j + 1], i, j + 1);
    }
  }

  return result;
};

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const length = array.length;
    let lastParentIdx = Math.floor((length - 2) / 2);
    for (let currentIdx = lastParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, length - 1, array);
    }
    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = 2 * currentIdx + 1;
    while (currentIdx <= endIdx) {
      let childTwoIdx = 2 * currentIdx + 2 >= endIdx ? -1 : 2 * currentIdx + 2;
      let swapIdx = childOneIdx;
      if (
        childTwoIdx !== -1 &&
        heap[childOneIdx]?.[0] > heap[childTwoIdx]?.[0]
      ) {
        swapIdx = childTwoIdx;
      }

      if (heap[currentIdx]?.[0] > heap[swapIdx]?.[0]) {
        this.swap(currentIdx, swapIdx, heap);
        currentIdx = swapIdx;
        childOneIdx = 2 * currentIdx + 1;
      } else {
        return;
      }
    }
  }

  swap(i, j, heap) {
    const temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (heap[parentIdx]?.[0] > heap[currentIdx]?.[0] && currentIdx > 0) {
      this.swap(parentIdx, currentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  insert(val, i, j) {
    this.heap.push([val, i, j]);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const minNum = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return minNum;
  }

  peek() {
    return this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0 ? true : false;
  }
}

console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3));
