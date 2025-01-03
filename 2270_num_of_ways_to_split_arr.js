/**
 *
 * @param {number[]} nums
 * @returns {number}
 */

function waysToSplitArray(nums) {
  let total = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  let curSum = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    curSum += nums[i];

    if (curSum > total - curSum) result++;
  }

  return result;
}

console.log(waysToSplitArray([2, 3, 1, 0]));
console.log(waysToSplitArray([6, -1, 9]));
console.log(waysToSplitArray([0, 0]));
