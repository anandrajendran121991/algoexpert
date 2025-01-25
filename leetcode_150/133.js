/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  const hashMap = {};
  function dfs(node) {
    if (node in hashMap) return hashMap[node];

    let copy = new _Node(node.val);
    hashMap[node] = copy;
    for (const nei of node.neighbors) {
      copy.neighbors.push(dfs(nei));
    }
    return copy;
  }

  if (node === null) return [];
  return dfs(node);
};
