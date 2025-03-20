function maxSumArray(nums) {
  let maxSoFar = -Infinity;
  let currentMax = 0;
  for (const num of nums) {
    currentMax = Math.max(num, num + currentMax);
    maxSoFar = Math.max(currentMax, maxSoFar);
  }

  return maxSoFar;
}

function maxSumArrayIndices(nums) {
  let maxSoFar = -Infinity;
  let currentMax = 0;
  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // if the current num is better than previous sum
    if (currentMax + num < num) {
      currentMax = num;
      tempStart = i; // Start a new subarray
    } else {
      currentMax = currentMax + num;
    }

    if (currentMax > maxSoFar) {
      maxSoFar = currentMax;
      start = tempStart; // Update start index to tempStart
      end = i; // Update end index to the current index
    }
  }

  return nums.slice(start, end + 1);
}

console.log(maxSumArrayIndices([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function maxSubArraySumCircular(nums) {
  let maxSoFar = -Infinity;
  let currentMax = 0;

  let minSoFar = Infinity;
  let currentMin = 0;

  let total = 0;

  for (const num of nums) {
    currentMax = Math.max(currentMax + num, num);
    maxSoFar = Math.max(currentMax, maxSoFar);

    currentMin = Math.min(currentMin + num, num);
    minSoFar = Math.min(minSoFar, currentMin);
    total += num;
  }

  if (maxSoFar > 0) {
    return Math.max(maxSoFar, total - minSoFar);
  } else {
    return maxSoFar;
  }
}

console.log(maxSubArraySumCircular([-3, -2, -3]));
