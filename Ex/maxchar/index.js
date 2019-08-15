// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Counting & Comparing Characters

// Works for 1) Does string A have the same characters as string B? 2) Does the given string have any repeated characters in it.

// Take the string and convert it into an object. Where the keys of the objects are the characters of the string, and the values are the number of times the character appears.

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}
module.exports = maxChar;
