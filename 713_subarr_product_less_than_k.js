/**
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */

function numSubarrayProductLessThanK(nums, k) {
  let result = 0;
  let product = 1;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];

    // Shrink the window if the product is greater than or equal to k.
    while (product >= k && left <= right) {
      product /= nums[left];
      left++;
    }
    result += right - left + 1;
  }

  return result;
}

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
