/**
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {boolean}
 */

function checkSubarraySum(nums, k) {
  let sum = 0;
  let hash = { 0: -1 }; // Initialize with remainder 0 at index -1 to handle edge cases

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let reminder = sum % k;

    if (reminder < 0) reminder += k; // Handle negative remainders

    if (hash.hasOwnProperty(reminder)) {
      if (i - hash[reminder] > 1) return true; // Check if subarray size is at least 2
    } else {
      hash[reminder] = i; // Store the first occurrence of this remainder
    }
  }

  return false;
}

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));
