// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
  const sumBranch = [];
  const stack = [root];
  let sum = 0;
  while (stack.length > 0) {
    const topRoot = stack.pop();
    sum += topRoot.val;
    if (topRoot.left !== null && topRoot.right !== null) {
      sumBranch.push(sum);
    }

    if (topRoot.left !== null) stack.push(topRoot.left);

    if (topRoot.right !== null) stack.push(topRoot.right);
  }

  return sumBranch;
}
