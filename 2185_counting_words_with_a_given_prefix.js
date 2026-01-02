/**
 *
 * @param {string[]} words
 * @param {string} pref
 * @returns {number}
 */

function prefixCount(words, pref) {
  let count = 0;
  const prefLen = pref.length;

  for (const word of words) {
    if (prefLen > word.length) continue;
    let subWord = word.slice(0, prefLen);
    if (subWord === pref) count++;
  }
  return count;
}

console.log(prefixCount(["pay", "attention", "practice", "attend"], "at"));
console.log(prefixCount(["leetcode", "win", "loops", "success"], "code"));
