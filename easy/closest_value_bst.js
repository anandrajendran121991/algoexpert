function findClosestValueInBst(tree, target) {
  // Write your code here.
  let closest = tree.value;
  let current = tree;
  while (current !== null) {
    if (Math.abs(target - current.value) < Math.abs(target - closest)) {
        closest = current.value;
      }
    if (target === current.value) {
      return closest;
    } else if (target < current.value) {
      current = current.left;
    } else if (target > current.value) {
      current = current.right;
    }
  }

  return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
