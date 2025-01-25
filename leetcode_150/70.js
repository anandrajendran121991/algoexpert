/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const table = new Array(n + 1).fill(0);
  table[0] = 1;
  table[1] = 1;
  for (let i = 2; i <= n; i++) {
    let step = 1;
    while (step <= 2 && step <= i) {
      table[i] += table[i - step];
      step++;
    }
  }
  return table[n];
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairsRec = function (n) {
  if (n <= 1) return 1;
  return climbStairsRec(n - 1) + climbStairsRec(n - 2);
};

//console.log(climbStairs(5));
// Measure recursive runtime
// console.time("climb stairs");
// console.log(climbStairsRec(5)); // Be careful with large numbers due to stack size
// console.timeEnd("climb stairs");

// Measure recursive runtime
console.time("climb stairs");
console.log(climbStairs(500)); // Be careful with large numbers due to stack size
console.timeEnd("climb stairs");
