// Define a constant variable 'boardNumber' and set it to 8.
const boardNumber = 8;

// Initialize an empty string 'str' to build the chessboard pattern.
let str = "";

// Outer loop to iterate over the rows of the chessboard.
for (let i = 0; i < boardNumber; i++) {
  // Inner loop to iterate over the columns of the chessboard.
  for (let j = 0; j < boardNumber; j++) {
    // Check if the sum of 'i' and 'j' is even, which determines the cell color.
    if ((i + j) % 2 == 0) {
      // If even, add a space to the 'str' variable to represent a white cell.
      str += " ";
    } else {
      // If odd, add a '#' character to the 'str' variable to represent a black cell.
      str += "#";
    }
  }

  // Output the current row (a complete row of the chessboard) to the console.
  console.log(str);

  // Reset the 'str' variable to an empty string for the next row.
  str = "";
}