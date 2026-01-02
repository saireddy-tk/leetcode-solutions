function sortedSquares(nums) {
  let left = 0;
  let right = nums.length - 1;
  let pos = nums.length - 1;
  const arr = new Array(nums.length);

  while (left <= right) {
    const leftVal = Math.pow(nums[left], 2);
    const rightVal = Math.pow(nums[right], 2);

    if (leftVal > rightVal) {
      arr[pos--] = leftVal;
      left++;
    } else {
      arr[pos--] = rightVal;
      right--;
    }
  }

  return arr;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
