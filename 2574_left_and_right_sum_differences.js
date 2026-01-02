/**
 * @param {number[]} nums
 * @returns {number[]}
 */
function leftRightDifference(nums) {
  const left = [0];
  const result = [];
  let rightSum = 0;

  for (let num = 0; num < nums.length - 1; num++) {
    left.push(left.at(-1) + nums[num]);
  }

  for (let num = nums.length - 1; num > 0; num--) {
    result.unshift(Math.abs(left[num] - rightSum));
    rightSum += nums[num];
  }
  result.unshift(Math.abs(left[0] - rightSum));
  return result;
}

console.log(leftRightDifference([10, 4, 8, 3]));
