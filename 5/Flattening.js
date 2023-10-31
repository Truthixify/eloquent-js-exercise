// Function 'flattenArray' takes an array of arrays and flattens it into a single array.
function flattenArray(array) {
  return array.reduce((a, b) => a.concat(b)); // Use the 'reduce' method to concatenate all sub-arrays into one.
}

// Define two arrays of arrays for testing.
const arrayOfArrays1 = [[1], [2, 3], [4, 5, 6]];
const arrayOfArrays2 = [["a", "b", "c"], [1, 2, "3"]];

// Output the results of the 'flattenArray' function for the two arrays.
console.log(flattenArray(arrayOfArrays1)); // Output: [1, 2, 3, 4, 5, 6] (flattened array)
console.log(flattenArray(arrayOfArrays2)); // Output: ["a", "b", "c", 1, 2, "3"] (flattened array)
