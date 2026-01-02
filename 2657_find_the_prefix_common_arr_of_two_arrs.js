/**
 * @param {number[]} A
 * @param {number[]} B
 * @returns {number[]}
 */

function findThePrefixCommonArray(A, B) {
  const set = new Set();
  const result = [];
  let currentSum = 0;

  for (let i = 0; i < A.length; i++) {
    const ele1 = A[i];
    const ele2 = B[i];

    if (set.has(ele1)) currentSum++;
    if (set.has(ele2)) currentSum++;
    if (ele1 === ele2 && !set.has(ele1)) currentSum++; // if both are equal and set does not contain ele

    set.add(ele1);
    set.add(ele2);

    result.push(currentSum);
  }

  return result;
}

console.log(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4]));
console.log(findThePrefixCommonArray([2, 3, 1], [3, 1, 2]));
