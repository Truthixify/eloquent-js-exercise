// Function to reverse an array
function reverseArray(array) {
  let reverse = []; // Create an empty array to store the reversed elements.

  // Loop through the input array in a forward order.
  for (let i = 0; i < array.length; i++) {
    // Push each element from the input array in reverse order to the 'reverse' array.
    reverse.push(array[array.length - i - 1]);
  }

  return reverse; // Return the reversed array.
}

// Function to reverse an array in place
function reverseArrayInPlace(array) {
  // Call the reverseArray function to get the reversed array and assign it back to 'array'.
  return array = reverseArray(array);
}

// Output the results of reversing arrays.
console.log(reverseArray([1, 2, 3, 4, 12])); // Output the reversed array
console.log(reverseArrayInPlace([1, 2, 3, 4, 12, 0])); // Output the reversed array (in place)
