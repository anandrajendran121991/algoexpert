/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const hashMap = new Map();
  for (let course = 0; course < numCourses; course++) {
    hashMap.set(course, []);
  }

  // adjacency list
  for (const prerequiste of prerequisites) {
    const [a, b] = prerequiste;
    hashMap.get(a).push(b);
  }

  const visited = new Set();
  for (let course = 0; course < numCourses; course++) {
    const canComplete = dfs(course);
    if (!canComplete) return false;
  }

  return true;

  function dfs(course) {
    if (hashMap.get(course).length === 0) return true;

    if (visited.has(course)) return false;

    visited.add(course);

    for (const c of hashMap.get(course)) {
      if (!dfs(c)) return false;
    }

    visited.delete(course);
    return true;
  }
};

console.log(
  canFinish(4, [
    [1, 0],
    [1, 2],
    [2, 0],
    [0, 1],
  ])
);
