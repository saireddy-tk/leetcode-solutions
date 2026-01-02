function isPalindrome(s){
  const str = s.toLowerCase()
  let left = 0
  let right = str.length -1

  while (left < right) {
    const lstr = str[left].charCodeAt()
    const rstr = str[right].charCodeAt()

    if (!((lstr >= 97 && lstr <= 122) || (lstr >= 48 && lstr <= 57))) {
      left++
      continue
    }
    if (!((rstr >= 97 && rstr <=122) || (rstr >= 48 && rstr <= 57))) {
      right--
      continue
    }
    if (str[left] !== str[right]) return false
    left++
    right--;
  }
  return true
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome("0P"))
