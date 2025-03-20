class MinHeap {
  constructor(array) {
    this.vertexMap = {};
    for (let i = 0; i < array.length; i++) {
      this.vertexMap[i] = i;
    }
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
      if (childTwo !== -1 && heap[childTwo][1] < heap[childOne][1]) {
        swapIdx = childTwo;
      }
      if (heap[swapIdx][1] < heap[currentIdx][1]) {
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
    while (currentIdx > 0 && heap[currentIdx][1] < heap[parentIdx][1]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  remove() {
    // Write your code here.
    if (this.isEmpty()) return;
    this.swap(0, this.heap.length - 1, this.heap);
    const [vertex, distance] = this.heap.pop();
    delete this.vertexMap[vertex];
    this.siftDown(0, this.heap.length - 1, this.heap);
    return [vertex, distance];
  }

  swap(i, j, heap) {
    this.vertexMap[heap[i][0]] = j;
    this.vertexMap[heap[j][0]] = i;
    const temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  update(vertex, value) {
    this.heap[this.vertexMap[vertex]] = [vertex, value];
    this.siftUp(this.vertexMap[vertex], this.heap);
  }
}

function dijkstrasAlgorithm(start, edges) {
  const minDistances = [];
  const initialDistances = [];
  // Write your code here.
  for (let i = 0; i < edges.length; i++) {
    minDistances.push(Infinity);
    initialDistances.push([i, Infinity]);
  }
  minDistances[start] = 0;
  const minDistanceHeap = new MinHeap(initialDistances);
  minDistanceHeap.update(start, 0);
  while (!minDistanceHeap.isEmpty()) {
    const [vertex, currentMinDistance] = minDistanceHeap.remove();
    if (currentMinDistance === Infinity) break;

    for (const edge of edges[vertex]) {
      const [destination, distanceToDestination] = edge;
      const newPathDistance = currentMinDistance + distanceToDestination;
      const currentDestinationDistance = minDistances[destination];
      if (newPathDistance < currentDestinationDistance) {
        minDistances[destination] = newPathDistance;
        minDistanceHeap.update(destination, newPathDistance);
      }
    }
  }
  return minDistances.map((x) => (x === Infinity ? -1 : x));
}

console.log(
  dijkstrasAlgorithm(0, [
    [[1, 7]],
    [
      [2, 6],
      [3, 20],
      [4, 3],
    ],
    [[3, 14]],
    [[4, 2]],
    [],
    [],
  ])
);
