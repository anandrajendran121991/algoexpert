/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = [0, 0]; // [max1, max2] = [2, 1]
  let buyingPoint = 0;
  for (let sellingPoint = 1; sellingPoint < prices.length; sellingPoint++) {
    if (prices[sellingPoint] > prices[buyingPoint]) {
      profit = prices[sellingPoint] - prices[buyingPoint];
      if (profit > maxProfit[0]) {
        maxProfit[1] = maxProfit[0];
        maxProfit[0] = profit;
      } else if (profit > maxProfit[1]) {
        maxProfit[1] = profit;
      }
    }
    buyingPoint = sellingPoint;
  }

  return maxProfit[0] + maxProfit[1];
};

console.log(maxProfit([1, 2, 3, 4, 5]));

// 2 - 1 = 1
// 3 - 1 = 2
// 4 - 1 = 3
// 5 - 1 = 4
