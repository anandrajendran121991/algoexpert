/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const visited = {};
  const prerequisiteMap = {};
  for (let i = 0; i < numCourses; i++) {
    prerequisiteMap[i] = [];
  }
  for (const prerequisite of prerequisites) {
    const [course, pre] = prerequisite;
    prerequisiteMap[course].push(pre);
  }

  for (let i = 0; i < numCourses; i++) {
    const canComplete = dfs(i, prerequisiteMap, visited);
    if (!canComplete) {
      return false;
    }
  }

  return true;
};

const dfs = (course, prerequisiteMap, visited) => {
  if (visited[course]) {
    return false;
  }
  if (prerequisiteMap[course].length === 0) {
    return true;
  }

  visited[course] = true;

  for (const neigbour of prerequisiteMap[course]) {
    const canComplete = dfs(neigbour, prerequisiteMap, visited);
    if (!canComplete) {
      return false;
    }
  }

  visited[course] = false;
  prerequisiteMap[course] = [];
  return true;
};

console.log(
  canFinish(5, [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [3, 4],
  ])
);
