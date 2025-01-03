/**
 *
 * @param {string} s
 * @returns {number}
 */

function maxScore(s) {
  let zeros = 0;
  let ones = 0;
  let result = 0;

  for (const ele of s) {
    if (ele === "1") ones++;
  }

  for (let i = 0; i < s.length - 1; i++) {
    const ele = s[i];
    if (ele === "1") ones--;
    else zeros++;
    result = Math.max(result, zeros + ones);
  }
  return result;
}

console.log(maxScore("00111"));
console.log(maxScore("00"));
