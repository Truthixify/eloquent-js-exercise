// Function 'every' checks if all elements in the 'array' satisfy the 'predicate' function.
function every(array, predicate) {
  // Iterate over each 'element' in the 'array'.
  for (let element of array) {
    // Check if the 'predicate' function returns false for the current 'element'.
    if (!predicate(element)) {
      return false; // If any element doesn't satisfy the condition, return false.
    }
  }
  return true; // If all elements satisfy the condition, return true.
}

// Create an array and a 'predicate' function to check if each element is greater than 0.
let array = [1, 2, 3, 4, 5];

// Call the 'every' function to check if all elements in 'array' are greater than 0.
console.log(every(array, n => n > 0)); // Output: true (all elements are greater than 0)
