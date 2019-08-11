// jest reversestring/test.js --watch

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION 1
// reverse = str => {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// };
// reverse('hello chris');

// SOLUTION 2
// 1) Create an empty string called Reversed 2) Iterate through the string 3) and for each character in the string take it and addd it to the start of Reversed 4) Return the variable Reversed.

// reverse = str => {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// };

// SOLUTION 3
reverse = str => str.split('').reduce((rev, char) => char + rev, '');

module.exports = reverse;
