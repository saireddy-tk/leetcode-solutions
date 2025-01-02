/**
 * @param {number[]} nums
 * @return {number}
 */

function removeDuplicates(nums) {
  let left = 1;
  let right = 1;

  while (right < nums.length) {
    if (nums[right - 1] !== nums[right]) {
      nums[left] = nums[right];
      left++;
    }
    right++;
  }
  return left;
}

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
