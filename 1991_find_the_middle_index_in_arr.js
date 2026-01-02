/**
 * @param {number[]} nums
 * @returns {number}
 */
function findMiddleIndex(nums) {
  let totalSum = 0;

  for (const num of nums) {
    totalSum += num;
  }

  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < nums.length; i++) {
    rightSum = totalSum - leftSum;
    leftSum += nums[i];
    if (leftSum === rightSum) return i;
  }

  return -1;
}

console.log(findMiddleIndex([2, 3, -1, 8, 4]));
