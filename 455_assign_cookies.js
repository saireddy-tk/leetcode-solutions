/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

function findContentChildren(g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);

  let left = 0;
  let right = 0;

  while (left < g.length && right < s.length) {
    if (g[left] <= s[right]) left++;
    right++;
  }

  return left;
}

console.log(findContentChildren([1, 3, 2], [1, 1]));
console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));
