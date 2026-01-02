function findPrefixScore(nums) {
  const result = [];
  let maxVal = nums[0];

  for (const num of nums) {
    maxVal = Math.max(maxVal, num);
    result.push((result.at(-1) || 0) + maxVal + num);
  }
  return result;
}

console.log(findPrefixScore([2, 3, 7, 5, 10]));
