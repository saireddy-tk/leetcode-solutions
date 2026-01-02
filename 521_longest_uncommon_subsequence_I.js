/**
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */

function findLUSlength(a, b) {
  if(a===b) return -1
  else return Math.max(a.length, b.length)
}

console.log(findLUSlength("aba", "cdc"));
console.log(findLUSlength("aefawfawfawfaw", "aefawfeawfwafwaef"));
