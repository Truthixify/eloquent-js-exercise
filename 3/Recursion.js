// Function to check if a number is even using recursive logic.
function isEven(number) {
  // Change the number to a positive number if it is negative
  number = number < 0 ? -number : number;

  // Check if the number is 0, in which case it's even, so return true.
  if (number === 0) return true;

  // Check if the number is 1, in which case it's odd, so return false.
  else if (number === 1) return false;

  // If the number is not 0 or 1, call the function 'isEven' again with the argument 'number - 2'.
  else return isEven(number - 2);
}

// Output the results of the 'isEven' function for different numbers.
console.log(isEven(50));   // Output: true (50 is even)
console.log(isEven(75));   // Output: false (75 is odd)
console.log(isEven(0));    // Output: true (0 is even)
console.log(isEven(-1));   // Output: false (-1 is considered odd after converting to positive)
console.log(isEven(-32));  // Output: true (-32 is even)
