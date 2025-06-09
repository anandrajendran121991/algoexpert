/**
 * @description Sum the even numbers
 * @param {*} nums
 * @returns {*} Number
 * @complexities Time => O(n) | Space => O(1) where n is the number of elements in the array
 */
function sumOfEvens(nums) {
  let sum = 0;
  for (const num of nums) {
    if (num % 2 === 0) sum += num;
  }

  return sum;
}

console.log(sumOfEvens([1, 2, 3, 4]));
console.log(sumOfEvens([5, 7, 9]));
