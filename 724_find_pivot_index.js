/**
 * @param {number[]} nums
 * @returns {number}
 */

function pivotIndex(nums) {
  let totalSum = 0;
  let preComp = [];

  for (const num of nums) {
    totalSum += num;
    preComp.push(totalSum);
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (preComp[i] === totalSum) return i;
    totalSum -= num;
  }

  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
