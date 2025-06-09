/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const leftProductSumArr = [];
  const rightProductSumAdrr = [];
  const productArr = [];

  let leftProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    leftProductSumArr.push(leftProduct);
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  let j = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    rightProductSumAdrr[j] = rightProduct;
    j--;
    rightProduct *= nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    productArr.push(leftProductSumArr[i] * rightProductSumAdrr[i]);
  }

  return productArr;
};

console.log(productExceptSelf([1, 2, 3, 4]));

//        [1, 2, 3, 4]
// left   [1, 1, 2, 6]
// right  [24 12 4  1]
// product[24, 12, 8, 6]
// Time complexity = O(n + n) = O(n)
// Space complexity = O(n + n + n) = O(n)
