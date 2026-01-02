/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @returns {number[]}
 */
function answerQueries(nums, queries) {
  nums = nums.sort((a, b) => a - b);

  const preComp = [];
  for (const num of nums) {
    preComp.push((preComp.at(-1) || 0) + num);
  }

  const result = [];
  for (const query of queries) {
    let left = 0;
    let right = preComp.length - 1;
    let answer = 0;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (preComp[mid] <= query) {
        answer = mid + 1;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    result.push(answer);
  }

  return result;
}

console.log(answerQueries([4, 5, 2, 1], [3, 10, 21]));
