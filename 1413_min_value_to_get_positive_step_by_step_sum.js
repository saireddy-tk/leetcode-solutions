/**
 * @param {number[]} nums
 * @return {number}
 */

function minStartValue(nums) {
  let min = 0;
  let sum = 0;

  for (const num of nums) {
    sum += num;
    min = Math.min(min, sum);
  }

  return 1 - min;
}

// console.log(minStartValue([-3, 2, -3, 4, 2]));
console.log(minStartValue([-4, -1, 1, -5, -4, 5, 5]));
