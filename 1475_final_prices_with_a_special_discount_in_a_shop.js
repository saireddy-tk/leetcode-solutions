/**
 * @param {number[]} prices
 * @returns {number[]}
 */

function finalPrices(prices) {
  // This approach is monotonic increasing order
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    const cur_price = prices[i];

    while (stack.length && cur_price <= prices[stack.at(-1)]) {
      idx = stack.pop();
      prices[idx] -= cur_price;
    }
    stack.push(i);
  }
  return prices;
}

console.log(finalPrices([8, 4, 6, 2, 3]));
// console.log(finalPrices([1, 2, 3, 4, 5]));
// console.log(finalPrices([10, 1, 1, 6]));
