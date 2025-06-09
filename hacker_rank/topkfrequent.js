class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const length = array.length - 2;
    let lastParentIdx = Math.floor(length / 2);
    for (let currentIdx = lastParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = 2 * currentIdx + 1;
    while (childOneIdx <= endIdx) {
      let childTwoIdx = 2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : -1;
      let swapIdx = childOneIdx;
      if (childTwoIdx !== -1 && heap[childTwoIdx][1] < heap[childOneIdx][1]) {
        swapIdx = childTwoIdx;
      }

      if (heap[swapIdx][1] < heap[currentIdx][1]) {
        this.swap(currentIdx, swapIdx, heap);
        currentIdx = swapIdx;
        childOneIdx = 2 * currentIdx + 1;
      } else return;
    }
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx][1] < heap[parentIdx][1]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  swap(i, j, heap) {
    const temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const [number, _] = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return number;
  }

  getSize() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0][1];
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const hashMap = new Map();
  for (const num of nums) {
    if (hashMap.has(num)) hashMap.set(num, hashMap.get(num) + 1);
    else hashMap.set(num, 1);
  }

  const minHeap = new MinHeap([]);
  for (const [num, frequency] of hashMap) {
    if (minHeap.getSize() < k) {
      minHeap.insert([num, frequency]);
    } else if (frequency > minHeap.peek()) {
      minHeap.remove();
      minHeap.insert([num, frequency]);
    }
  }

  const result = [];

  while (minHeap.getSize() > 0) {
    result.push(minHeap.remove());
  }

  return result;
};

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
