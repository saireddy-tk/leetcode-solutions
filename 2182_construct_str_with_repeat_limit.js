/**
 * @param {string} s
 * @param {number} repeatLimit
 * @returns {string}
 */

function repeatLimitedString(s, repeatLimit) {
  const hash = {};
  let newStr = "";

  for (const str of s) {
    hash[str] = (hash[str] || 0) + 1;
  }

  const sortedArr = Object.keys(hash).sort((a, b) => b.localeCompare(a));
  let i = 0;

  while (i < sortedArr.length) {
    const key = sortedArr[i];
    const count = Math.min(hash[key], repeatLimit);

    newStr += key.repeat(count);
    hash[key] -= count;

    if (hash[key] > 0) {
      let nextIdx = i + 1;

      while (nextIdx < sortedArr.length && hash[sortedArr[nextIdx]] === 0) {
        nextIdx++;
      }

      if (nextIdx >= sortedArr.length) {
        break;
      }

      const nextChar = sortedArr[nextIdx];
      newStr += nextChar;
      hash[nextChar] -= 1;
    } else {
      i++;
    }
  }

  return newStr;
}

console.log(repeatLimitedString("cczazcc", 3));
console.log(repeatLimitedString("aababab", 2));
