class Heap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    let lastParentIdx = Math.floor((array.length - 2) / 2);
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
      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        swapIdx = childTwoIdx;
      }
      if (heap[swapIdx] < heap[currentIdx]) {
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
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
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
    const minElement = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return minElement;
  }

  getSize() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }
}

var findKthLargest = function (nums, k) {
  const minHeap = new Heap([]);

  for (const num of nums) {
    if (minHeap.getSize() < k) {
      minHeap.insert(num);
    } else if (num > minHeap.peek()) {
      minHeap.remove();
      minHeap.insert(num);
    }
  }

  return minHeap.peek(); // The k-th largest
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
