// Function to generate a range of numbers from 'a' to 'b' with a specified 'step'.
function range(a, b, step = 1) {
  let list = []; // Initialize an empty array to store the generated range.

  // Loop from 'a' to 'b' with increments of 'step'.
  for (let i = a; i <= b; i += step) {
    list.push(i); // Add each value to the 'list' array.
  }

  return list; // Return the generated range as an array.
}

// Function to calculate the sum of all elements in an array.
function sum(range) {
  let sum = 0; // Initialize a variable to store the sum.

  // Loop through the 'range' array and add each element to 'sum'.
  for (let i = 0; i < range.length; i++) {
    sum += range[i];
  }

  return sum; // Return the calculated sum.
}

// Output the results of the 'range' and 'sum' functions with different arguments.
console.log(range(1, 100)); // Output a range from 1 to 100 with the default step of 1.
console.log(range(2, 100, 2)); // Output a range from 2 to 100 with a step of 2.
console.log(sum(range(1, 100))); // Output the sum of a range from 1 to 100.
console.log(sum(range(1, 100, 2))); // Output the sum of a range from 1 to 100 with a step of 2.