// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION 1
reverse = str => {
  return str
    .split('')
    .reverse()
    .join('');
};
reverse('hello chris');

module.exports = reverse;
