/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

class Node {
  constructor(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
    this.val = val;
    this.isLeaf = isLeaf;
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
  }
}

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function (grid) {
  let n = grid.length;
  function dfs(n, r, c) {
    let isAllSame = true;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[r][c] !== grid[r + i][c + j]) isAllSame = false;
      }
    }

    if (isAllSame) return new Node(grid[r][c], true, null, null, null, null);

    n = Math.floor(n / 2);
    const topLeft = dfs(n, r, c);
    const topRight = dfs(n, r, c + n);
    const bottomLeft = dfs(n, r + n, c);
    const bottomRight = dfs(n, r + n, c + n);

    return new Node(
      grid[r][c],
      false,
      topLeft,
      topRight,
      bottomLeft,
      bottomRight
    );
  }
  return dfs(n, 0, 0);
};

console.log(
  construct([
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
  ])
);
