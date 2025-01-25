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
var levelOrder = function (root) {
  if (!root) return [];
  const levelOrder = [];
  const queue = [root];
  while (queue.length > 0) {
    const queueSize = queue.length;
    const currentLevel = [];
    for (let i = 0; i < queueSize; i++) {
      const topOfQueue = queue.shift();
      currentLevel.push(topOfQueue.val);
      if (topOfQueue.left !== null) queue.push(topOfQueue.left);
      if (topOfQueue.right !== null) queue.push(topOfQueue.right);
    }
    levelOrder.push(currentLevel);
  }

  return levelOrder;
};
