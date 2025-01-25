function recursive(n) {
  // base case when n is zero or less
  if (n <= 0) return 0;

  // base case when n is 1
  if (n === 1) return 1;

  return recursive(n - 1) + recursive(n - 2);
}

function memoization(n, memo = []) {
  // before we compute the result we check if the result is already in cache/memo
  if (n in memo) return memo[n];

  // base cases
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let res = memoization(n - 1, memo) + memoization(n - 2, memo);
  memo[n] = res;
  return res;
}

function dp(n) {
  const tabulation = new Array(n + 1).fill(0);
  tabulation[0] = 0;
  tabulation[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    tabulation[i] = tabulation[i - 1] + tabulation[i - 2];
  }
  return tabulation[n];
}

// Measure recursive runtime
// console.time("Recursive Fibonacci");
// console.log(recursive(45));
// console.timeEnd("Recursive Fibonacci");

// Measure recursive runtime
// console.time("Recursive Fibonacci with memo");
// console.log(memoization(300));
// console.timeEnd("Recursive Fibonacci with memo");

// // Measure recursive runtime
console.time("Recursive Fibonacci with dp");
console.log(dp(450));
console.timeEnd("Recursive Fibonacci with dp");
