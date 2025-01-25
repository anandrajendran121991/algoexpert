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
 * @return {number[][]}
 */
var rightSideView = function (root) {
  if (!root) return [];
  const rightSideNodes = [];
  const queue = [root];
  let rightmostNode = null;
  while (queue.length > 0) {
    const queueSize = queue.length;
    for (let i = 1; i <= queueSize; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      rightmostNode = node;
    }

    if (rightmostNode) rightSideNodes.push(rightmostNode.val);
  }

  return rightSideNodes;
};
