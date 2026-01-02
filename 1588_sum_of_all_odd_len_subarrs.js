/**
 * @param {number[]} arr
 * @returns {number}
 */
function sumOddLengthSubarrays(arr) {
  const preComp = [];
  let result = 0;

  for (const ele of arr) {
    preComp.push((preComp.at(-1) || 0) + ele);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      // Check if the length of the subarray is odd
      if ((j - i + 1) % 2 === 1) {
        // Calculate the sum of the subarray [i, j] using prefix sum
        const subarraySum = i === 0 ? preComp[j] : preComp[j] - preComp[i - 1];
        result += subarraySum;
      }
    }
  }

  return result;
}

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
