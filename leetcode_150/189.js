const rotate = (nums, k) => {
  const length = nums.length;
  let rotatedArray = new Array(length).fill(1);
  for (let i = 0; i < length; i++) {
    let nextIdx = (i + k) % length;
    rotatedArray[nextIdx] = nums[i];
  }

  // Mutate nums to update its values
  for (let i = 0; i < length; i++) {
    nums[i] = rotatedArray[i];
  }
  return nums;
};

console.log(rotate([-1, -100, 3, 99], 2));
