/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const hashMap = {};
  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    const value = values[i];
    if (!(a in hashMap)) {
      hashMap[a] = [];
    }
    if (!(b in hashMap)) {
      hashMap[b] = [];
    }

    hashMap[a].push([b, value]);
    hashMap[b].push([a, 1 / value]);
  }

  const results = [];
  for (const [a, b] of queries) {
    if (!(a in hashMap) || !(b in hashMap)) results.push(-1.0);
    else if (a === b) results.push(1.0);
    else results.push(dfs(a, b, hashMap, new Set()));
  }

  return results;
};

const dfs = (current, target, hashMap, visited) => {
  if (current === target) return 1.0;

  visited.add(current);

  for (const [neigbour, value] of hashMap[current]) {
    if (!visited.has(neigbour)) {
      const results = dfs(neigbour, target, hashMap, visited);
      if (results !== -1.0) {
        return results * value;
      }
    }
  }
  return -1.0;
};

console.log(
  calcEquation(
    [
      ["a", "b"],
      ["b", "c"],
    ],
    [2.0, 3.0],
    [
      ["a", "c"],
      ["b", "a"],
      ["a", "e"],
      ["a", "a"],
      ["x", "x"],
    ]
  )
);
