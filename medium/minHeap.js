class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp();
  }

  remove() {
    this.swap(0, this.heap.length - 1);
    const lastElement = this.heap.pop();
    this.siftDown(0);
    return lastElement;
  }

  peak() {
    return this.heap[0];
  }

  siftUp(currentIdx) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (parentIdx !== 0 && this.heap[parentIdx] > this.heap[currentIdx]) {
      this.swap(currentIdx, parentIdx);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  siftDown(currentIdx) {
    let leftIdx = 2 * currentIdx + 1;
    let rightIdx = 2 * currentIdx + 2;
    while (leftIdx > this.heap.length - 1 && rightIdx > this.heap.length - 1) {
      let leftValue = this.heap[leftIdx];
      let rightValue = this.heap[rightIdx];
      let smallestIdx = leftIdx;
      if (rightValue < leftValue) {
        smallestIdx = rightIdx;
      }
      this.swap(currentIdx, rightIdx);
      currentIdx = smallestIdx;
    }
  }

  swap(i, j) {
    const temp = this.heap[j];
    this.heap[j] = this.heap[i];
    this.heap[i] = temp;
  }
}

let object = new MinHeap([48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]);
