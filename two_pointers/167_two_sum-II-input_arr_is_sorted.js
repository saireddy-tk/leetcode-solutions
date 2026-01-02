function twoSum(numbers, target){
  let left = 0
  let right = numbers.length -1

  while(numbers[left]<numbers[right]){
    if(numbers[left]+numbers[right] === target) return [left, right]
    else if(numbers[left]+numbers[right] > target) right--
    else left++
  }
  return [left, right]
}