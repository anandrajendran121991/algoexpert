/**
 * @param {string[]} data
 * @returns {Object} total spent by each customer
 */
function calculateTotalSpent(data) {
  // your code here
  const totals = {};
  for (const d of data) {
    const [__, customer_id, _, quantityStr, priceStr] = d.split(",");
    const quantity = +quantityStr;
    const price = +priceStr;
    const cost = quantity * price;
    if (totals[customer_id]) {
      totals[customer_id] += cost;
    } else {
      totals[customer_id] = cost;
    }
  }

  // Round all totals to 2 decimal places
  for (const customer in totals) {
    totals[customer] = parseFloat(totals[customer].toFixed(2));
  }

  return totals;
}

console.log(
  calculateTotalSpent([
    "1001,C123,P456,2,4.99",
    "1001,C123,P789,1,9.99",
    "1002,C456,P111,3,3.50",
    "1003,C123,P222,1,5.99",
  ])
);
