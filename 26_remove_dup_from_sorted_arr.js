function removeDuplicates(nums) {
  let left = 1;
  let right = 1;
  while (right < nums.length) {
    if (nums[right - 1] !== nums[right]) {
      nums[left] = nums[right];
      left++;
      console.log(nums);
      
    }
    right++;
  }
  return left
}

console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([1, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
