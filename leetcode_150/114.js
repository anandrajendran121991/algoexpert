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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  dfs(root);
};

function dfs(root) {
  if (root === null) return null;

  // Flatten the left and right subtrees
  let leftTail = dfs(root.left);
  let rightTail = dfs(root.right);

  // If there's a left subtree, attach it between root and the right subtree
  if (leftTail !== null) {
    leftTail.right = root.right; // Connect left subtree's tail to right subtree
    root.right = root.left; // Move left subtree to the right
    root.left = null; // Nullify left pointer
  }

  // Return the tail node of the flattened subtree
  return rightTail || leftTail || root;
}
