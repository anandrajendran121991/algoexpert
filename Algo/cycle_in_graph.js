const cycleInGraph = (edges) => {
  const visited = new Set();
  // Check for cycles in each connected component
  for (const node in edges) {
    const isCyclic = dfs(node, visited, edges);
    if (isCyclic) {
      return true;
    }
  }

  return false; // No cycle found
};

const dfs = (node, visited, edges) => {
  if (visited.has(node)) {
    return true;
  }

  if (edges[node].length === 0) {
    return false;
  }

  visited.add(node);
  for (const neighbour of edges[node]) {
    const isCyclic = dfs(neighbour, visited, edges);
    if (isCyclic) {
      return true;
    }
  }

  edges[node] = [];
  return false;
};

console.log(cycleInGraph([[1, 2], [2], []]));
