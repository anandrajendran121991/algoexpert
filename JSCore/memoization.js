// fibbonnaci is a sequence of numbers which are calculated by summing previous 2 numbers
// 1 1 2 3 5 8 13 21

//console.log(fib(8)); // ReferenceError: Cannot access 'fib' before initialization because

var fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
};

console.log(fib(8));
