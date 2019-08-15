// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   // Create an empty array to hold chunks
//   const chunked = [];

//   for (let element of array) {
//     // For each element in the array retrieve the last element
//     const last = chunked[chunked.length - 1];
//     //  If the last element does not exist or its length is equal to chunk size
//     if (!last || last.length === size) {
//       // Push a new chunk into 'chunked' with the current element
//       chunked.push([element]);
//     } else {
//       // Add the current element into the chunk
//       last.push(element);
//     }
//   }
//   return chunked;
// }

function chunk(array, size) {
  // Create an empty 'chunked' array
  const chunked = [];
  // Create 'index' starting at 0
  let index = 0;
  // While index is less than array.length
  while (index < array.length) {
    // Push a slice of length 'size' from 'array' into 'clunked'
    chunked.push(array.slice(index, index + size));
    // Add 'slice' to 'index'
    index += size;
  }
  return chunked;
}

module.exports = chunk;
