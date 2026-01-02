/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @returns {number}
 */
function minimumSumSubarray(nums, l, r) {
  const preComp = [];

  for (const num of nums) {
    preComp.push((preComp.at(-1) || 0) + num);
  }

  let min = Infinity;

  for (let window_size = l; window_size <= r; window_size++) {
    let left = 0;
    let right = window_size;

    while (right <= nums.length) {
      const sum = preComp[right - 1] - (left > 0 ? preComp[left - 1] : 0);
      if (sum > 0) min = Math.min(min, sum);

      left++;
      right++;
    }
  }

  return min === Infinity ? -1 : min;
}

console.log(minimumSumSubarray([3, -2, 1, 4], 2, 3)); // 1
console.log(minimumSumSubarray([-2, 2, -3, 1], 2, 3)); // -1
