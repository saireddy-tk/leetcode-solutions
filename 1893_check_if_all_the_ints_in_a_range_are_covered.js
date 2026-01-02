/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
function isCovered(ranges, left, right) {
  const set = new Set();

  for (const range of ranges) {
    for (let i = range[0]; i <= range[1]; i++) {
      set.add(i);
    }
  }

  for (let i = left; i <= right; i++) {
    if (!set.has(i)) return false;
  }
  return true;
}

console.log(
  isCovered(
    [
      [1, 10],
      [10, 20],
    ],
    21,
    21
  )
);
