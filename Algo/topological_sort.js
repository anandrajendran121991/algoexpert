function topologicalSort(jobs, deps) {
  // Write your code here.
  const hashMap = {};
  for (const job of jobs) {
    hashMap[job] = [];
  }

  for (const dep of deps) {
    hashMap[dep[1]] = [...hashMap[dep[1]].concat(dep[0])];
  }

  const output = [];
  const visited = new Map();
  const cycle = new Map();

  function dfs(job) {
    if (visited.has(job)) return true;
    if (cycle.has(job)) return false;

    cycle.set(job, true);
    visited.set(job, true);
    for (const j of hashMap[job]) {
      if (!dfs(j)) return false;
    }
    cycle.set(job, false);
    output.push(job);
    return true;
  }

  for (const job of jobs) {
    if (!dfs(job)) {
      return [];
    }
  }

  return output;
}

console.log(
  topologicalSort(
    [1, 2, 3, 4],
    [
      [1, 2],
      [1, 3],
      [3, 2],
      [4, 2],
      [4, 3],
    ]
  )
);
