/**
 *
 * @param {string} s
 * @returns {number}
 */

function countPalindromicSubsequence(s) {
  const uniqueSet = new Set();
  const leftSet = new Set();
  const right = {};

  for (const str of s) {
    right[str] = (right[str] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    right[s[i]]--;

    for (const val of Array.from(leftSet)) {
      if (right[val] > 0) {
        uniqueSet.add(`${val}${s[i]}${val}`);
      }
    }
    leftSet.add(s[i]);
  }

  return uniqueSet.size;
}

// console.log(countPalindromicSubsequence("aabca"));
console.log(countPalindromicSubsequence("bbcbaba"));
