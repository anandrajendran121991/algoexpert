/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let min = Number.MAX_SAFE_INTEGER;
  let prev = null;
  function dfs(root) {
    if (!root) {
      return;
    }

    dfs(root.left);
    if (prev) {
      min = Math.min(min, root.val);
    }

    prev = root.val;
    dfs(root.right);
  }

  dfs(root);
  const array = []
  array.reverse()
  return min;
};

