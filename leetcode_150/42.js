/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (heights) {
  const hashMap = {};
  constructMaxLeft(hashMap, heights);
  constructMaxRight(hashMap, heights);

  let surfaceAreaOfTrappedWater = 0;

  for (let idx = 0; idx < heights.length; idx++) {
    let currentValue = heights[idx];
    let leftMax = hashMap[idx][0];
    let rightMax = hashMap[idx][1];
    if (Math.min(leftMax, rightMax) > currentValue) {
      surfaceAreaOfTrappedWater += Math.min(leftMax, rightMax) - currentValue;
    }
  }

  return surfaceAreaOfTrappedWater;
};

const constructMaxLeft = (hashMap, array) => {
  let maxSoFar = 0;
  hashMap[0] = [maxSoFar];
  const length = array.length;
  for (let i = 1; i < length; i++) {
    if (array[i - 1] > maxSoFar) {
      maxSoFar = array[i - 1];
    }
    hashMap[i] = [maxSoFar];
  }
  return hashMap;
};

const constructMaxRight = (hashMap, array) => {
  let maxSoFar = 0;
  const length = array.length;
  hashMap[length - 1].push(maxSoFar);
  for (let i = length - 2; i >= 0; i--) {
    if (array[i + 1] > maxSoFar) {
      maxSoFar = array[i + 1];
    }
    hashMap[i].push(maxSoFar);
  }

  return hashMap;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
