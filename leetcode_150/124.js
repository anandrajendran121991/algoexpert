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
var maxPathSum = function (root) {
  let res = root.val;

  function dfs(root) {
    if (root === null) return 0;

    let leftMax = dfs(root.left); // 2
    let rightMax = dfs(root.right); // null
    leftMax = Math.max(0, leftMax);
    rightMax = Math.max(0, rightMax);
    res = Math.max(res, root.val + leftMax + rightMax);
    return root.val + Math.max(leftMax, rightMax);
  }

  dfs(root);

  return res;
};

// Definition for a binary tree node
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function constructTree(values) {
  if (!values || values[0] === null) {
    return null;
  }

  const root = new TreeNode(values[0]);
  const queue = [root];
  let i = 1;

  while (queue.length > 0 && i < values.length) {
    const current = queue.shift();

    if (values[i] !== null) {
      current.left = new TreeNode(values[i]);
      queue.push(current.left);
    }
    i++;

    if (i < values.length && values[i] !== null) {
      current.right = new TreeNode(values[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

// Example usage
const values = [1, 2, 3, null, null, 4, 5];
const root = constructTree(values);
console.log(maxPathSum(root));
