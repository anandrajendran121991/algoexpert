function flattenAndSum(arr, n) {
  let sum = 0;
  function recursion(array, depth) {
    for (const val of array) {
      if (typeof val === "object" && depth < n) {
        recursion(val, depth + 1);
      } else if (typeof val === "number") {
        sum += val;
      }
    }
  }

  recursion(arr, 0);

  return sum;
}

console.log(flattenAndSum([1, [2, [3, 4]], 5], 1));
