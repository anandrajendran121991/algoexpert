/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const preRequisiteMap = {};
  const visited = {};
  const output = [];
  for (let i = 0; i < numCourses; i++) {
    preRequisiteMap[i] = [];
  }

  for (const prerequisite of prerequisites) {
    const [course, pre] = prerequisite;
    preRequisiteMap[course].push(pre);
  }

  for (let i = 0; i < numCourses; i++) {
    const isCyclic = dfs(i, preRequisiteMap, visited, output);
    if (!isCyclic) {
      return output;
    }
  }
  return output;
};

const dfs = (course, preRequisiteMap, visited, output) => {
  if (visited[course]) {
    return false;
  }

  if (preRequisiteMap[course].length === 0) {
    if (!output.includes(+course)) {
      output.push(+course);
    }

    return true;
  }

  visited[course] = true;
  for (const neigbour of preRequisiteMap[course]) {
    const isCyclic = dfs(neigbour, preRequisiteMap, visited, output);
    if (!isCyclic) {
      return false;
    }
  }
  visited[course] = false;
  preRequisiteMap[course] = [];
  if (!output.includes(+course)) {
    output.push(+course);
  }
  return true;
};

console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
);
