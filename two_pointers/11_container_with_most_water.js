function maxArea(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const leftVal = height[left];
    const rightVal = height[right];
    const min = Math.min(leftVal, rightVal);
    max = Math.max(max, min * (right - left));

    if (rightVal > leftVal) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
