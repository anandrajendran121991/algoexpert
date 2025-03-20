class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const lastParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = lastParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }

    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = 2 * currentIdx + 1;
    while (currentIdx <= endIdx) {
      let childTwoIdx = 2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : -1;
      let swapIdx = childOneIdx;

      if (childTwoIdx !== -1 && heap[childTwoIdx][1] < heap[childOneIdx][1]) {
        swapIdx = childTwoIdx;
      }

      if (heap[swapIdx][1] < heap[currentIdx][1]) {
        this.swap(swapIdx, currentIdx, heap);
        currentIdx = swapIdx;
        childOneIdx = 2 * currentIdx + 1;
      } else {
        return;
      }
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
    // swap the first and last element
    this.swap(0, this.heap.length - 1, this.heap);
    const minElement = this.heap.pop(); // the min element is at the last position
    this.siftDown(0, this.heap.length - 1, this.heap);
    return minElement;
  }

  peek() {
    return this.heap[0];
  }

  getSize() {
    return this.heap.length;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) hash.set(nums[i], hash.get(nums[i]) + 1);
    else hash.set(nums[i], 1);
  }

  const heap = new MinHeap([]);

  for (const [element, freq] of hash) {
    heap.insert([element, freq]);
    if (heap.getSize() > k) {
      heap.remove();
    }
  }

  const freqElement = [];
  while (heap.getSize() > 0) {
    const [element, _] = heap.remove();
    freqElement.push(element);
  }
  return freqElement;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
