class MedianFinder {
  constructor() {
    // Write your code here.
    this.median = null;
    this.lowers = new Heap(MAX_HEAP_FUNC, []);
    this.greaters = new Heap(MIN_HEAP_FUNC, []);
  }
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (!this.lowers.length || num < this.lowers.peek()) {
    this.lowers.insert(num);
  } else {
    this.greaters.insert(num);
  }

  this.rebalanceHeaps();
  this.updateMedian();
};

MedianFinder.prototype.rebalanceHeaps = function () {
  if (this.lowers.length - this.greaters.length === 2) {
    const poppedLower = this.lowers.remove();
    this.greaters.insert(poppedLower);
  } else if (this.greaters.length - this.lowers.length === 2) {
    const poppedGreater = this.greaters.remove();
    this.lowers.insert(poppedGreater);
  }
};

MedianFinder.prototype.updateMedian = function () {
  if (this.lowers.length === this.greaters.length) {
    this.median = (this.lowers.peek() + this.greaters.peek()) / 2;
  } else if (this.lowers.length > this.greaters.length) {
    this.median = this.lowers.peek();
  } else if (this.greaters.length > this.lowers.length) {
    this.median = this.greaters.peek();
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  return this.median;
};

class Heap {
  constructor(compareFunc, array) {
    this.compareFunc = compareFunc;
    this.heap = this.buildHeap(array);
    this.length = this.heap.length;
  }

  buildHeap(array) {
    const lastParentIdx = Math.floor((array.length - 1) / 2);
    for (let currentIdx = lastParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }

    return array;
  }

  insert(value) {
    this.heap.push(value);
    this.length++;
    this.siftUp(this.heap.length - 1);
  }

  remove() {
    this.swap(0, this.heap.length - 1);
    const value = this.heap.pop();
    this.length--;
    this.siftDown(0, this.heap.length - 1);

    return value;
  }

  siftUp(currentIdx) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (
      currentIdx > 0 &&
      this.compareFunc(this.heap[currentIdx], this.heap[parentIdx])
    ) {
      this.swap(currentIdx, parentIdx);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  siftDown(currentIdx, endIdx) {
    let childOneIdx = 2 * currentIdx + 1;
    while (childOneIdx <= endIdx) {
      let childTwoIdx = 2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : -1;
      let idxToSwap = childOneIdx;

      if (
        childTwoIdx !== -1 &&
        this.compareFunc(this.heap[childTwoIdx], this.heap[childOneIdx])
      ) {
        idxToSwap = childTwoIdx;
      }

      if (this.compareFunc(this.heap[idxToSwap], this.heap[currentIdx])) {
        this.swap(currentIdx, idxToSwap);
        currentIdx = idxToSwap;
        childOneIdx = 2 * currentIdx + 1;
      } else {
        break;
      }
    }
  }

  peek() {
    return this.heap[0];
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

function MAX_HEAP_FUNC(a, b) {
  return a > b;
}

function MIN_HEAP_FUNC(a, b) {
  return a < b;
}

let obj = new MedianFinder();
obj.addNum(6);
console.log(obj.findMedian());
obj.addNum(10);
console.log(obj.findMedian());
obj.addNum(2);
console.log(obj.findMedian());
obj.addNum(6);
console.log(obj.findMedian());
obj.addNum(5);
console.log(obj.findMedian());
obj.addNum(0);
console.log(obj.findMedian());
obj.addNum(6);
console.log(obj.findMedian());
obj.addNum(3);
console.log(obj.findMedian());
obj.addNum(1);
console.log(obj.findMedian());
obj.addNum(0);
console.log(obj.findMedian());
obj.addNum(0);
console.log(obj.findMedian());
