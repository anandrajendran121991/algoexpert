function cycleInGraph(edges) {
  const visited = new Set();
  function isCycle(edge) {
    if (visited.has(edge)) return true;

    if (edges[edge].length === 0) return false;

    visited.add(edge);

    for (const e of edges[edge]) {
      if (isCycle(e)) return true;
    }
    edges[edge] = [];
    visited.delete(edge);
    return false;
  }

  for (let i = 0; i < edges.length; i++) {
    if (isCycle(i)) return true;
  }
  return false;
}

console.log(cycleInGraph([[1, 3], [2, 3, 4], [0], [], [2, 5], []]));
console.log(cycleInGraph([[1, 2], [2], []]));
