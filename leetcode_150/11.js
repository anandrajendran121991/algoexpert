/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxAreaCount = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let leftContainerHeigth = height[left];
    let rightContainerHeight = height[right];
    let minHeight = Math.min(leftContainerHeigth, rightContainerHeight);
    let containerLength = right - left;
    let currentMaxArea = minHeight * containerLength;
    maxAreaCount = Math.max(currentMaxArea, maxAreaCount);
    if (leftContainerHeigth < rightContainerHeight) {
      left++;
    } else if (leftContainerHeigth > rightContainerHeight) {
      right--;
    } else if (leftContainerHeigth === rightContainerHeight) {
      left++;
      right--;
    }
  }

  return maxAreaCount;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
