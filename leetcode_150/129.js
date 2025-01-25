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
var sumNumbers = function (root) {
  function dfsSum(root, pathSum = 0) {
    if (!root) {
      return pathSum;
    }

    pathSum = pathSum * 10 + root.val;
    if (!root.left && !root.right) {
      return pathSum;
    }

    return dfsSum(root.left, pathSum) + dfsSum(root.right, pathSum);
  }

  return dfsSum(root);
};
