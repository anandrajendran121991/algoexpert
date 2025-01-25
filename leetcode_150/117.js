// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

/**
 * Constructs a binary tree from a level-order array.
 * @param {Array} values - Array representation of the binary tree.
 * @return {TreeNode} - Root of the constructed binary tree.
 */
function constructBinaryTree(values) {
  if (!values || values.length === 0 || values[0] === null) return null;

  const root = new TreeNode(values[0]); // Create the root node
  const queue = [root]; // Queue to hold nodes while building the tree
  let i = 1; // Pointer for the array

  while (i < values.length) {
    const current = queue.shift(); // Get the current node from the queue

    // Add left child if available
    if (i < values.length && values[i] !== null) {
      current.left = new TreeNode(values[i]);
      queue.push(current.left);
    }
    i++;

    // Add right child if available
    if (i < values.length && values[i] !== null) {
      current.right = new TreeNode(values[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

const values = [1, 2, 3, 4, 5, null, 7];
const root = constructBinaryTree(values);

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (root === null) return null;

  let node = new Node(root.val);
  const queue = [root];
  while (queue.length > 0) {
    const size = queue.length;
    node = queue.shift();
    for (let i = 0; i < size; i++) {
      if (root?.left) queue.push(root.left);
      if (root?.right) queue.push(root.right);
    }

    node.next = "#";
  }

  return root;
};

console.log(connect(root));
