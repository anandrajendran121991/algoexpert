const maxProfit = (prices) => {
  let maximumProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let buyPrice = prices[i];
      let sellPrice = prices[j];
      maximumProfit = Math.max(sellPrice - buyPrice, maximumProfit);
    }
  }

  return maximumProfit;
};

const maxProfitEfficient = (prices) => {
  let sellingPoint = 1;
  let buyingPoint = 0;
  let maxProfit = 0;
  const length = prices.length;
  while (sellingPoint < length) {
    if (prices[buyingPoint] >= prices[sellingPoint]) {
      sellingPoint = buyingPoint;
      buyingPoint++;
    } else {
      let profit = prices[sellingPoint] - prices[buyingPoint];
      maxProfit = Math.max(profit, maxProfit);
      buyingPoint++;
    }
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
