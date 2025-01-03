/**
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */

function subarraySum(nums, k) {
  let sum = 0;
  let result = 0;
  const hash = { 0: 1 }; // to consider sub arr one ele might be equal to k

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    if (hash[sum - k]) result += hash[sum - k];
    hash[sum] = (hash[sum] || 0) + 1;
  }

  return result;
}

console.log(subarraySum([1, 2, 3], 3));
