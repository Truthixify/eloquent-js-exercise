// Function to deeply compare two values 'a' and 'b'.
function deepEqual(a, b) {
  // Check if 'a' is strictly equal to 'b' (same value and type).
  if (a === b) {
    return true; // Values are equal, return true.
  } else if (typeof a === "object" && typeof b === "object") {
    // Check if both 'a' and 'b' are objects.

    // Get the keys of 'a' and 'b'.
    const keysFromA = Object.keys(a);
    const keysFromB = Object.keys(b);

    // Check if the number of keys in 'a' and 'b' are the same.
    if (keysFromA.length != keysFromB.length) {
      return false; // Number of keys is different, objects are not equal.
    } else {
      // Loop through the keys of 'a'.
      for (let i = 0; i < keysFromA.length; i++) {
        // Check if the keys from 'a' exist in 'b'.
        if (keysFromB.includes(keysFromA[i])) {
          return true; // Keys are the same, continue comparing the values.
        } else {
          return false; // Keys are not the same, objects are not equal.
        }
      }
    }
  } else {
    return false; // Values are of different types, not equal.
  }
}

// Define three objects for testing.
const car = { type: "Fiat", model: "500", color: "white" };
const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
const truth = { firstName: "Truth", lastName: "Ixify", age: 24, eyeColor: "brown" };

// Output the results of the 'deepEqual' function with different arguments.
console.log(deepEqual({ a: "a", b: "b", c: "c" }, { b: "b", a: "a", c: "c" })); // Output: true (objects with the same keys and values)
console.log(deepEqual(car, person)); // Output: false (different objects with different keys and values)
console.log(deepEqual(person, truth)); // Output: true (objects with the same keys and values)