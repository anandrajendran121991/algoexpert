/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const length = nums.length;
  let lastParentIdx = Math.floor((length - 2) / 2);
  for (let currentIdx = lastParentIdx; currentIdx >= 0; currentIdx--) {
    siftDown(currentIdx, length - 1, nums);
  }

  let kLargest = nums[0];
  // now the nums is a max heap and we need to remove k times
  for (let i = 1; i <= k; i++) {
    kLargest = remove(nums); // pop the heap
  }

  return kLargest;
};

var siftDown = function (currentIdx, endIdx, heap) {
  let childOne = 2 * currentIdx + 1;
  while (childOne <= endIdx) {
    let childTwo = 2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : -1;
    let swapIdx = childOne;
    if (childTwo !== -1 && heap[childTwo] > heap[childOne]) {
      swapIdx = childTwo;
    }
    if (heap[swapIdx] > heap[currentIdx]) {
      swap(swapIdx, currentIdx, heap);
      currentIdx = swapIdx
      childOne = 2 * currentIdx + 1
    } else {
      return;
    }
  }
};

var remove = function (nums) {
  swap(0, nums.length - 1, nums);
  const lastElement = nums.pop();
  siftDown(0, nums.length - 1, nums);
  return lastElement;
};

var swap = function (i, j, heap) {
  const temp = heap[i];
  heap[i] = heap[j];
  heap[j] = temp;
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
