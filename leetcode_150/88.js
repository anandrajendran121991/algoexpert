const merge = (nums1, m, nums2, n) => {
  let insertionIdx = nums1.length - 1;
  let pointerOne = nums1.length - 1 - n;
  let pointerTwo = nums2.length - 1;

  while (pointerOne >= 0 && pointerTwo >= 0) {
    if (nums1[pointerOne] > nums2[pointerTwo]) {
      nums1[insertionIdx] = nums1[pointerOne];
      insertionIdx--;
      pointerOne--;
    } else if (nums1[pointerOne] < nums2[pointerTwo]) {
      nums1[insertionIdx] = nums2[pointerTwo];
      insertionIdx--;
      pointerTwo--;
    } else {
      nums1[insertionIdx] = nums1[pointerOne];
      insertionIdx--;
      pointerOne--;
      nums1[insertionIdx] = nums2[pointerTwo];
      insertionIdx--;
      pointerTwo--;
    }
  }

  while (pointerTwo >= 0) {
    nums1[insertionIdx] = nums2[pointerTwo];
    insertionIdx--;
    pointerTwo--;
  }

  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
