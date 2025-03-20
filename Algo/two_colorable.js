function twoColorable(edges) {
  const stack = [0];
  let colors = new Array(edges.length).fill(null);
  colors[0] = true;
  while (stack.length > 0) {
    const node = stack.pop();
    for (const connection of edges[node]) {
      if (colors[connection] === colors[node]) {
        return false;
      }
      colors[connection] = !colors[node];
      stack.push(connection);
    }
  }
  return true;
}

console.log(
  twoColorable([
    [1, 2],
    [0, 2],
    [0, 1],
  ])
);
