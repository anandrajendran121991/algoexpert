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
 * @return {boolean}
 * @complexities Time => O(n) | Space => O(n)
 */
var isValidBST = function (root) {
  const sortedArray = [];
  function inOrder(root) {
    if (!root) return;
    inOrder(root.left);
    sortedArray.push(root.val);
    inOrder(root.right);
  }

  inOrder(root);
  if (sortedArray.length === 0 || sortedArray.length === 1) return true;

  for (let i = 1; i < sortedArray.length; i++) {
    if (sortedArray[i] <= sortedArray[i - 1]) return false;
  }

  return true;
};


Math.abs(1 -1 )