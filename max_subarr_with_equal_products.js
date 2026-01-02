/**
 * @param {number[]} arr
 * @return {number}
 */
function maxLength(arr) {
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
  }

  let maxLength = 0;
  let n = arr.length;

  for (let start = 0; start < n; start++) {
    let product = 1;
    let currentGCD = arr[start];
    let currentLCM = arr[start];

    for (let end = start; end < n; end++) {
      // Update product, GCD, and LCM for the subarray
      product *= arr[end];
      currentGCD = gcd(currentGCD, arr[end]);
      currentLCM = lcm(currentLCM, arr[end]);

      // Check if the condition holds
      if (product === currentGCD * currentLCM) {
        maxLength = Math.max(maxLength, end - start + 1);
      }
    }
  }

  return maxLength;
}
