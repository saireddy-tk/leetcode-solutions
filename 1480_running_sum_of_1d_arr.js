/**
 * @param {number[]} nums
 * @returns {number[]}
 */

function runningSum(nums) {
  const preComp = [];

  for (const num of nums) {
    preComp.push((preComp.at(-1) || 0) + num);
  }

  return preComp;
}

console.log(runningSum([1, 2, 3, 4]));
