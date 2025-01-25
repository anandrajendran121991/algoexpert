/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length === 0) return null;
  const rootValue = postorder.pop();
  // Find the index of the root in inorder traversal
  const idx = inorder.indexOf(rootValue);
  const root = new TreeNode(rootValue);

  const leftInOrder = inorder.slice(0, idx);
  const rightInOrder = inorder.slice(idx + 1);

  root.left = buildTree(leftInOrder, postorder);
  root.right = buildTree(rightInOrder, postorder);
  return root;
};
