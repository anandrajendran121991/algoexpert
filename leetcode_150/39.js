/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let targetSumCombo = [];

  const backTrack = (start, target, combo) => {
    if (target === 0) {
      targetSumCombo.push([...combo]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      let current = candidates[i];
      if (current > target) continue;
      combo.push(current);
      backTrack(i, target - current, combo);
      combo.pop();
    }
  };

  backTrack(0, target, []);
  return targetSumCombo;
};

console.log(combinationSum([2, 3, 6, 7], 7));
