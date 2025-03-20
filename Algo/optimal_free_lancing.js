function optimalFreelancing(jobs) {
  // Write your code here.
  const LENGTH_OF_WEEK = 7;
  const timeline = new Array(LENGTH_OF_WEEK).fill(false);
  jobs.sort((jobA, jobB) => jobB.payment - jobA.payment);
  let profit = 0;
  for (const job of jobs) {
    const maxTime = Math.min(job.deadline, LENGTH_OF_WEEK);
    for (let time = maxTime - 1; time >= 0; time--) {
      if (timeline[time] === false) {
        timeline[time] = true;
        profit += job.payment;
        break;
      }
    }
  }

  return profit;
}

console.log(
  optimalFreelancing({
    jobs: [
      {
        deadline: 1,
        payment: 1,
      },
      {
        deadline: 2,
        payment: 1,
      },
    ],
  })
);
