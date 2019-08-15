// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  // From 0 to N iterate through rows
  for (let row = 0; row < n; row++) {
    // Create an empty string 'stair'
    let stair = '';

    for (let column = 0; column < n; column++) {
      // If the current column is equal to or less than the current row
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

module.exports = steps;
