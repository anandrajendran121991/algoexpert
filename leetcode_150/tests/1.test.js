const twoSum = require("../1.js");

test("twoSum function is defined", () => {
  expect(typeof twoSum).toBe("function");
});

describe("twoSum Function", () => {
  test("returns the correct indices for a valid target sum", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 0]);
  });

  test("works when the array contains negative numbers", () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([4, 2]);
  });

  test("works when there are multiple valid pairs (returns the first pair)", () => {
    expect(twoSum([1, 3, 3, 6], 6)).toEqual([2, 1]); // First valid pair
  });

  test("returns undefined or empty array when no valid pair exists", () => {
    expect(twoSum([1, 2, 3], 7)).toBeUndefined(); // Modify based on function behavior
  });

  test("handles edge case of empty array", () => {
    expect(twoSum([], 5)).toBeUndefined();
  });

  test("handles edge case with one number", () => {
    expect(twoSum([5], 5)).toBeUndefined();
  });
});
