/**
 * @param {string} s
 * @param {string} t
 * @returns {character}
 */

function findTheDifference(s, t) {
  const hash = {};
  let result = "";

  for (const ele of s) hash[ele] = (hash[ele] || 0) + 1;

  for (const ele of t) {
    if (!hash.hasOwnProperty(ele) || hash[ele] <= 0) result += ele;
    else hash[ele] -= 1;
  }

  return result;
}

console.log(findTheDifference("abcd", "abcde"));
console.log(findTheDifference("a", "aa"));
