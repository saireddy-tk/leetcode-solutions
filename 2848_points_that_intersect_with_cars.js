/**
 * @param {number[][]} nums
 * @return {number}
 */
function numberOfPoints(nums) {
  const set = new Set();
  for (const [start, end] of nums) {
    for (let i = start; i <= end; i++) {
      set.add(i);
    }
  }

  return set.size;
}

console.log(
  numberOfPoints([
    [3, 6],
    [1, 5],
    [4, 7],
  ])
);
