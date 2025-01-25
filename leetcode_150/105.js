// Definition for a binary tree node
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val; // Value of the node
    this.left = left; // Left child (TreeNode or null)
    this.right = right; // Right child (TreeNode or null)
  }
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;
  const rootValue = preorder[0];
  // Find the index of the root in inorder traversal
  const rootIndexInOrder = inorder.indexOf(rootValue);
  const root = new TreeNode(rootValue);

  const leftInOrder = inorder.slice(0, rootIndexInOrder);
  const rightInOrder = inorder.slice(rootIndexInOrder + 1);

  const leftPreOrder = preorder.slice(1, leftInOrder.length + 1);
  const rightPreOrder = preorder.slice(leftInOrder.length + 1);
  root.left = buildTree(leftPreOrder, leftInOrder);
  root.right = buildTree(rightPreOrder, rightInOrder);
  return root;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
