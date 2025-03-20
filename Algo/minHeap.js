export class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    // Write your code here.
    const length = array.length;
    let lastParentIdx = Math.floor((length - 2) / 2);
    for (let currentIdx = lastParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, length - 1, array);
    }

    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    // Write your code here.
    let childOne = 2 * currentIdx + 1;
    while (childOne <= endIdx) {
      let childTwo = 2 * currentIdx + 2;
      if (childTwo > endIdx) {
        childTwo = -1;
      }
      let swapIdx = childOne;
      if (heap[childTwo][0] < heap[childOne][0]) {
        swapIdx = childTwo;
      }
      if (heap[swapIdx][0] < heap[currentIdx][0]) {
        this.swap(swapIdx, currentIdx, heap);
        currentIdx = swapIdx;
        childOne = 2 * currentIdx + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currentIdx, heap) {
    // Write your code here.
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx][0] < heap[parentIdx][0]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  peek() {
    // Write your code here.
    return this.heap[0];
  }

  remove() {
    // Write your code here.
    this.swap(0, this.heap.length - 1, this.heap);
    const lastElement = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return lastElement;
  }

  insert(value) {
    // Write your code here.
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  swap(i, j, heap) {
    let temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  }

  getSize() {
    return this.heap.length;
  }
}

let object = new MinHeap([48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]);
