/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [];
  let combo = [];

  const backTrack = (start) => {
    if (combo.length === k) {
      result.push([...combo]);
      return;
    }

    for (let i = start; i <= n; i++) {
      combo.push(i);
      backTrack(i + 1);
      combo.pop();
    }
  };

  backTrack(1);
  return result;
};

console.log(combine(4, 2));
