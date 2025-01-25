/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let totalGas = 0;
  for (const g of gas) {
    totalGas += g;
  }

  let totalCost = 0;
  for (const c of cost) {
    totalCost += c;
  }

  if (totalCost > totalGas) return -1;

  let diff = new Array(gas.length).fill(0);

  for (let i = 0; i < gas.length; i++) {
    diff[i] = gas[i] - cost[i];
  }

  let total = 0;
  let j = 0;
  let potentialStart = 0;
  while (j < diff.length) {
    total = total + diff[j];
    if (total < 0) {
      total = 0;
      potentialStart = j + 1;
    }

    j++;
  }

  Array.isArray(gas)

  return potentialStart;
};

console.log(canCompleteCircuit([3, 1, 1], [1, 2, 2]));
