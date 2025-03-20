class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

function createBinaryTree(arr) {
  if (!arr.length || arr[0] === null) return null;

  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 1;

  while (i < arr.length) {
    let current = queue.shift();

    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6, 7];
const root = createBinaryTree(arr);

function maxPathSum(tree) {
  // Write your code here.
  let res = tree.value;
  dfs(tree);

  function dfs(tree) {
    if (tree === null) {
      return 0;
    }

    let leftMax = dfs(tree.left);
    let rightMax = dfs(tree.right);
    leftMax = Math.max(0, leftMax);
    rightMax = Math.max(0, rightMax);
    res = Math.max(res, tree.value + leftMax + rightMax);
    return root.value + Math.max(leftMax, rightMax);
  }
  return res;
}

console.log(maxPathSum(root));
