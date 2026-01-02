/**
 * @param {number[]} nums
 * @return {number}
 */

function minOperations(nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === 0) {
      nums[i] = 1;
      nums[i + 1] = nums[i + 1] === 0 ? 1 : 0;
      nums[i + 2] = nums[i + 2] === 0 ? 1 : 0;
      count++;
    }
  }

  if (nums.at(-1) === 0 || nums.at(-2) === 0) return -1;
  return count;
}
console.log(minOperations([0, 1, 1, 1, 0, 0]));
console.log(minOperations([0, 1, 1, 1]));
