function getPermutations(array) {
  // Write your code here.
  const res = [];
  function rec(currentPath, used) {
    if (currentPath.length === array.length) {
      res.push([...currentPath]);
      return;
    }

    for (let i = 0; i < array.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      currentPath.push(array[i]);
      rec(currentPath, used);
      currentPath.pop();
      used[i] = false;
    }
  }
  const used = new Set();
  rec([], used);
  return res;
}

console.log(getPermutations([1, 2, 3]));
