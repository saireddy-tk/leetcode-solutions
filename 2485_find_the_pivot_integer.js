/**
 * @param {number} n
 * @returns {number}
 */
function pivotInteger(n) {
  const totalSum = (n * (n + 1)) / 2;

  for (let i = 1; i <= n; i++) {
    const leftSum = (i * (i + 1)) / 2;
    const rightSum = totalSum - leftSum + i;

    if (rightSum === leftSum) return i;
  }

  return -1;
}

console.log(pivotInteger(8));
console.log(pivotInteger(4));
