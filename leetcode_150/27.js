const removeElement = (nums, val) => {
  let positionToInsert = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[positionToInsert] = nums[i];
      positionToInsert++;
    }
  }

  return positionToInsert;
};

console.log(removeElement([3, 2, 2, 3], 3));
