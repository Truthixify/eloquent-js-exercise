// Define a class 'Group' to represent a collection of unique values.
class Group {
  constructor() {
    return this; // Constructor returns the 'this' object.
  }

  // Method 'add' adds a unique value to the group.
  add(value) {
    if (!this.hasOwnProperty(value)) {
      this[value] = ""; // Add the value as a property in the group.
    }
  }

  // Method 'delete' removes a value from the group.
  delete(value) {
    if (this.hasOwnProperty(value)) {
      delete this[value]; // Delete the property associated with the value.
    }
  }

  // Method 'has' checks if a value is in the group.
  has(value) {
    return this.hasOwnProperty(value) ? true : false; // Check if the value is a property.
  }

  // Static method 'from' creates a group from an object.
  static from(object) {
    for (let key of Object.keys(object)) {
      this[key] = object[key]; // Copy properties from the object to the group.
    }

    return this;
  }
}

// Create an instance of the 'Group' class.
const group = new Group();

// Add and manipulate values in the group.
group.add("a");
group.add("a"); // Duplicate value "a" won't be added.
group.add("b");
group.delete("a"); // Delete value "a".

// Output the contents of the group and check if it has value "c".
console.log(group); // Output: { b: '' } (group without "a")
console.log(group.has("c")); // Output: false (group doesn't have "c")

// Create another instance of 'Group' using the 'from' method.
const groupFromObject = Group.from({ a: "hello", b: "hi", c: "what's up" });

// Output the contents of the group created from an object.
console.log(groupFromObject); // Output: { a: 'hello', b: 'hi', c: "what's up" } (group from the object)
