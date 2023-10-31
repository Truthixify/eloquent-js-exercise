// A custom loop function that takes four parameters: value, test, update, and body.
function loop(value, test, update, body) {
  // Check if the 'test' function returns false for the current 'value'.
  if (!test(value)) {
    return false; // If false, exit the loop.
  } else {
    body(value); // Execute the 'body' function with the current 'value'.
    value = update(value); // Update the 'value' using the 'update' function.

    // Recursively call the loop function with the updated 'value' and the same functions.
    loop(value, test, update, body);
  }
}

// Example 1: Using the 'loop' function to count from 3 to 19 and log each value.
loop(
  3, 
  n => n < 20, // 'test' function checks if 'n' is less than 20.
  n => n += 1, // 'update' function increments 'n' by 1.
  n => console.log("current value ", n) // 'body' function logs the current value.
);

// Example 2: Using the 'loop' function to generate an array of random numbers up to 20 elements.
loop(
  [], 
  array => array.length < 20, // 'test' function checks if the array's length is less than 20.
  array => {
    array.push(Math.floor(Math.random() * 100)); // 'update' function appends a random number to the array.
    return array;
  }, 
  array => console.log(array) // 'body' function logs the array.
);