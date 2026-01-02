/**
 * @param {number[]} nums
 */

var NumArray = function (nums) {
  this.nums = nums;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  let sum = 0;
  while (left <= right) {
    sum += this.nums[left];
    left++;
  }

  return sum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

var obj = new NumArray([-2, 0, 3, -5, 2, -1]);

var param_1 = obj.sumRange(0, 2);

console.log(param_1);
