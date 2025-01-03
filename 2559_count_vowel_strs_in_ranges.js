/**
 *
 * @param {string[]} words
 * @param {number[][]} queries
 * @returns {number[]}
 */

function vowelStrings(words, queries) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const preCompute = [];
  const result = [];

  let count = 0;
  for (const word of words) {
    if (vowels.has(word[0]) && vowels.has(word.at(-1))) {
      count++;
    }
    preCompute.push(count);
  }

  for (const query of queries) {
    const start = query[0];
    const end = query[1];
    const sub_result =
      preCompute[end] - (start > 0 ? preCompute[start - 1] : 0);
    result.push(sub_result);
  }
  return result;
}

console.log(
  vowelStrings(
    ["aba", "bcb", "ece", "aa", "e"],
    [
      [0, 2],
      [1, 4],
      [1, 1],
    ]
  )
);
