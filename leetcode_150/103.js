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
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const zigzag = [];
  const queue = [root];
  const leftToRight = true;
  while (queue.length > 0) {
    const queueSize = queue.length;

    const currentZigZag = [];
    if (leftToRight) {
      for (let i = 0; i < queueSize; i++) {
        const topOfQueue = queue.shift();
        currentZigZag.push(topOfQueue.val);
        if (topOfQueue.left) queue.push(topOfQueue.left);
        if (topOfQueue.right) queue.push(topOfQueue.right);
      }
      leftToRight = false;
      zigzag.push(currentZigZag);
    } else {
      for (let i = 0; i < queueSize; i++) {
        const topOfQueue = queue.pop();
        currentZigZag.push(topOfQueue.val);
        if (topOfQueue.left) queue.push(topOfQueue.left);
        if (topOfQueue.right) queue.push(topOfQueue.right);
      }
      leftToRight = true;
      zigzag.push(currentZigZag);
    }
  }

  return zigzag;
};
