function nodeDepths(root) {
  if (!root) return 0;

  let sumOfDepths = 0;
  const queue = [{ node: root, depth: 0 }];

  while (queue.length > 0) {
    const { node, depth } = queue.shift();

    if (!node) continue;

    sumOfDepths += depth;

    queue.push({ node: node.left, depth: depth + 1 });
    queue.push({ node: node.right, depth: depth + 1 });
  }

  return sumOfDepths;
}
