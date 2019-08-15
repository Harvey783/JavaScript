// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // Make an empty array
  const words = [];
  // Split the input string by spaces to get an array
  for (let word of str.split(' ')) {
    // Uppercase the first letter of the word and Join the first letter with the rest of the string. Then Push result into 'words' array
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  // Join 'words' into a string and return it
  return words.join(' ');
}

module.exports = capitalize;
