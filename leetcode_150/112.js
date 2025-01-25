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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  return dfsHasPath(root, targetSum);
};

function dfsHasPath(root, targetSum, currentSum = 0) {
  // root is the lead node, we calculat the
  if (!root) {
    return false;
  }

  currentSum += root.val;
  if (!root.left && !root.right && currentSum === targetSum) {
    return true;
  }

  if (root.left && dfsHasPath(root.left, targetSum, currentSum)) return true;

  if (root.right && dfsHasPath(root.right, targetSum, currentSum)) return true;

  return false;
}
