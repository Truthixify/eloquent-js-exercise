// Create a unique symbol 'hasOwnProperty'.
const hasOwnProperty = Symbol("hasOwnProperty");

// Define an object 'object' with a property and a method using the 'hasOwnProperty' symbol.
const object = {
  greet: "hi", // Property 'greet' with the value "hi".
  [hasOwnProperty]() {
    return "has"; // Method 'hasOwnProperty' returning "has".
  }
}

// Check if the object has a property named 'greet'.
console.log(object.hasOwnProperty("greet")); // Output: true (object has property 'greet')

// Call the 'hasOwnProperty' method using the symbol.
console.log(object[hasOwnProperty]()); // Output: "has" (calling the custom method)
