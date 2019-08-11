// jest reversestring/test.js --watch

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION 1
// Turn string into an array, and call the reverse method on the array. Then join the array back into a string, and return the result.

// reverse = string => {
//   return string
//     .split('')
//     .reverse()
//     .join('');
// };
// reverse('hello');

// SOLUTION 2
// 1) Create an empty string called Reversed 2) Iterate through the string 3) and for each character in the string take it and addd it to the start of Reversed 4) Return the variable Reversed.
// Here the 'for of' syntax is used. FOR a variable delclration where a temporary variable is redeclared every time through the loop of character. OF the iterable object to iterate through. Iterate through each character of string and set each character equal to the temporary variable character. Then take that charcter and add it on to the start of string reversed before finally returning the string reversed.

// reverse = str => {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// };

// SOLUTION 3
// Turn string into an array array with the split function. Then use the reduce method, which takes all the values of an array and condenses them into a single value. Here, all the values of the array are being reduced into a single string value. When reduce runs it takes its starting arguement and passes into the arrow function as the first arguement. Whatever gets returned from that inner functon then gets used as the starting arguement for every successive run of the function. The function runs one time for every elememnt within the array. Character that currently operating on in the array. Take character and add it to the total reversed string and return result.
function reverse(str) {
  str.split('').reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;
