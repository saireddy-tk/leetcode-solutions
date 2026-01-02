/**
 * @param {string} s
 * @return {number}
 */
function calculateScore(s) {
  const mirrorMap = {};
  let score = 0;

  // Create a mirror mapping for each character
  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode("a".charCodeAt(0) + i);
    const mirrorChar = String.fromCharCode("z".charCodeAt(0) - i);
    mirrorMap[char] = mirrorChar;
  }

  const indexMap = {}; // To store the last seen index of each character

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    const mirrorChar = mirrorMap[currentChar];

    // Check if there are indices for the mirror character
    if (indexMap[mirrorChar]?.length) {
      const j = indexMap[mirrorChar].pop(); // Get the last index of the mirror character
      score += i - j; // Calculate the score
    } else {
      // If no mirror character found, push the current index for the current character
      if (!indexMap[currentChar]) indexMap[currentChar] = []; // Initialize if it doesn't exist
      indexMap[currentChar].push(i); // Push the current index for the current character
    }
  }

  return score;
}

console.log(calculateScore("aczzx")); // 5
console.log(calculateScore("zadavyayobbgqsexaabk")); // 18
