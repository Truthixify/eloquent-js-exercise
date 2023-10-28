// Function to count the number of occurrences of a character 'char' in a string 'str'.
function countChar(str, char) {
  let count = 0; // Initialize a variable 'count' to keep track of the character count.
  
  // Loop through each character in the 'str'.
  for (let i = 0; i < str.length; i++) {
    // Check if the current character is equal to the target character 'char'.
    if (str[i] == char) {
      count += 1; // Increment the count if a match is found.
    }
  }

  return count; // Return the total count of the character in the string.
}

// Output the results of the 'countChar' function with different strings and characters.
console.log(countChar("bbbBbTsts", "b")); // Output: 4 (count of 'b' in the first string)
console.log(countChar("On one hand, Jacques is quite glad that he doesn’t have classic lycanthropy", "a")); // Output: 6 (count of 'a' in the second string)
