function minimumWaitingTime(queries) {
  // Write your code here.
  queries.sort((a, b) => a - b);
  let waiting = 0;
  let sum = 0;
  for (let i = 1; i < queries.length; i++) {
    waiting += queries[i - 1];
    sum += waiting;
  }

  return sum;
}

console.log(minimumWaitingTime([3, 2, 1, 2, 6]));
